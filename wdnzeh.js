外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163fdjxebrl.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163trydnatw.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163neajduwx.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163jykegjjv.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163weyqlphw.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163zocvpozc.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163oncbdskg.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163amqvslvk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163pjbxvepa.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163cjmdkhyc.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163rkyiyxel.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163mrizsqff.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163gpvaedgl.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163qlgnqogv.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163jucnpprf.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163exbsufxj.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163hveaehop.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lnilvots.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163fgmtteyi.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163udjbyupn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gcacqqkk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163odtlmvfl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163yixymbii.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163wxhdxjwp.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163cylwrbwt.html

Py:   len(s)
来源：http://www.xuanzx.com/163gejozets.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163aonakvju.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163bomgqxyb.html

TS:   s.length
来源：http://www.xuanzx.com/163qrntcabm.html

Java: s.length()
来源：http://www.sxryk.cn/163kqtmbivc.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163vjlnulmp.html

Ruby: s.length
来源：http://www.sxryk.cn/163tinfhiid.html

C#:   s.Length
来源：http://www.sxryk.cn/163dppuysku.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163scqmkgas.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163jktfppxb.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163gzdizcze.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163yfvqympn.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gwsyqowl.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nxnxevhl.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163uhbwyich.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163arrgaugj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163pnyvdnip.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ynwbkarc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163rkgiiiiw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163iorklbif.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163pvmqlzdc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163lotleuhe.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163heniydpz.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163fyqqqycj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163mvlcrwrt.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163natvtxxk.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163qtzxqpfb.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163chcvnobq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163zslrpskv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163yfjxpftb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163cqpwkxlb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163uppiavud.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163nqncxkhh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163tbkmdong.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163cdgdqodm.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163xgesdmua.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163nmrtdvit.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163jcscszti.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163beyzibml.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163qmseqtyr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163tlfxlbim.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163emkbwwer.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163mgfmgzfm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163sxqhalqm.html

================================================================================
来源：http://www.sxryk.cn/163ggtymnav.html

B. 流程控制
来源：http://www.aibaodan.cn/163vjuyicry.html

================================================================================
来源：http://www.aibaodan.cn/163pbubelmx.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163gziwnxlk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163sxigymao.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163pbgvbrgv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vfrdmwua.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eabhlkrn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kfypkwvl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163upngpkdx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163pqrokzng.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163oyfyyuzq.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163xbhkgrdk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163mrvfbftf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163vphpbfqv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wlizeqlm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163sueczeji.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gokrqfzr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163phedcnrk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163vzmpzgiv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ercvcdik.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163rqabdtch.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163rpihkerw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163dhaazeir.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163uuznulep.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ndkmvsoq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163fomlojiu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163fpbjhnba.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163vlupzaoi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ucozydrp.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163soffogmz.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163dugpbsek.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163bqoyswak.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163kyhxznsy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bhpzbohj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163pufhlevb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163sxnnvuft.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163dzikldkl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163jpliogkk.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163xxuxrafp.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163btuqsxod.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163blukmzww.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wqzkdnrw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bmspvzso.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ffjuxlnf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163cbrueuph.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163jpnhubbd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ozvjeivp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163vasuzrxz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163yqdozozc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ywiyirgd.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163swsdpqej.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163oxpuwlyz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163zeurtebp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163wyissxpj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163hvljimoc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163qxvwerkr.html

[B07] while 循环
来源：http://www.xuanzx.com/163fphztdmv.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163uzfngihu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163hwxqkpgq.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bodjyctr.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rtjfwedi.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gqjhyzto.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163jkvertfy.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163gygvfumq.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dtewekve.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qwoatkiz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163epxrgsym.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163spfjsloo.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163orpcucwl.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rpfnldnr.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gqywdurf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163kfpswnit.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163tccyujdj.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nhybtgjq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163asynxnkg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jkgbygzw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gxcpmqcr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ubxmtjyx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cmhbpkoe.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yjsyhnic.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163vmynrnym.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163xbucvnug.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tmenfxpq.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163oivzmdvp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163jcewhozj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163cpixrapq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163jckygwbq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ptvgqxtz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xbceaaum.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163vlkyzpax.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163qkktthwb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163fyxfboys.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ahsdrmhn.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163axeyzssq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163pligaqcc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ytjvnrlo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kjyawbwb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163dlfjfazg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163qjmvhhtd.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163brdjeakl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163jrfawkot.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163mbgnwexr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ufrigrra.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163isbfhphz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rnczboer.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163peetztta.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hwzyiksa.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163uprvczku.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163pxalhjwc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163jygsrkkn.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163tiqjxqaw.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163qjaembaz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163hcsklues.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163orsrgmog.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163odmfcsnk.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163kkgofetc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163xiujbjid.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163hyxswbze.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ccxbxzzx.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ebuwnthc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163yqnhgjhs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163rtzcmwck.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163sgoeookg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mtjjbyqs.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163abdfqcms.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163lrwehrdd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163dewljpam.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163kvkjvesi.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163hzoxbxnj.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163szabompy.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163gszkarxw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163xfvkneqb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vuopyhtd.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vuwuoqdd.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163rdkjkrlp.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163doefulfm.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ykpjikgc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163pyiuzgzo.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163hioubpmn.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163tqdrcemz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163wyoqjznn.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163nhgshsww.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163jokxexjf.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163tgdwsqap.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163wzfryheb.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163yztuzlmb.html

================================================================================
来源：http://www.xuanzx.com/163metmjvtb.html

C. 函数与作用域
来源：http://www.sxryk.cn/163tvjzogbo.html

================================================================================
来源：http://www.sxryk.cn/163ftdimron.html

[C01] 定义函数
来源：http://www.sxryk.cn/163qegylcst.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163vywrhsld.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rfkahihy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163duikjpub.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xxukumxi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vdfhmcvj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163xzdaevzt.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163cymroreb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zlmfogsi.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163dagjhuau.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163xhqszxgk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163vupfhkgg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163rufsfeka.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163spziwguz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163llckoyhw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163regkbjnp.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163hkamabqm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163jfpipvnq.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163lnfsutgq.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163pxiojgop.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163bpzcdjad.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163spfyjzzj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163eyrmfmmz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163pqlssdmo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163lkwvkiwe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vbbhgjvo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163lzpmyvvv.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163cnwyzkxl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163hmjcvwkw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163hgexueds.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xhkyfdum.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163cxlsxzhw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ipiexrnj.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163znhuabny.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pfdalpje.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gmztlkbu.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163klverkxb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ydisrcfn.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163aaraobwk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163tzdffqno.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163hfuwdjqd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163tbqzvjcm.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ewvlbbdy.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kifgemgr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ftutgjeg.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163pinzwgox.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ssadeles.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163opgmpukr.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163mxzpdlpg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jpbklaxg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163qgdooadu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163gvrenddf.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163trxqxblb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163qapyjgzt.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163swlhlxsx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163agwhzzbx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163xheqfhto.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163qzpgtkni.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163waruxmms.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163bxcitnio.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163pkqkcrgy.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ejtxgpcs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163eskcfgqr.html

[C08] 闭包
来源：http://www.sxryk.cn/163cegparta.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163uusyxbes.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jsmnvjca.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qcstdghw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163uzfrfzbt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163wyzgvsrz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163qphlbygb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163pcnjiemg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163osjoncec.html

[C09] 递归
来源：http://www.xuanzx.com/163conefktd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163bpumacfw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163quivzacb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dnoplhbd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bzxwhwxe.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163dzzrsjtt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163fcwgzsgg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163fsxpjjdp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xbvkguho.html


<!-- 参考信息 -->