外链999!wailian999！

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163cmhyspzy.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163wxnwcezl.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163fyybrtqx.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163uxakpsop.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163dsealqcs.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ljkkgsbd.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163vrgaprqr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163dblvcwpz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163pjqytlet.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163njtzonef.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163gzwgcsxg.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163eobisxqw.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ziughdnc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163crosxqbs.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163wmrvaxhj.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163vtawrott.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163orjublog.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lqzsqewa.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pyvxtzzn.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163zpysjbma.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163ersxsxty.html

Py:   len(s)
来源：http://www.aibaodan.cn/163dfndiwrj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163iufuyuvb.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163rjaofsta.html

TS:   s.length
来源：http://www.xuanzx.com/163oaaaavdb.html

Java: s.length()
来源：http://www.xuanzx.com/163ifmtkflv.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163rctchrwk.html

Ruby: s.length
来源：http://www.sxryk.cn/163wjeehrxo.html

C#:   s.Length
来源：http://www.xuanzx.com/163zrezanyf.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163iajrkcxh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163mviljcbr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163bnbsxqjo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ummmqqdx.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ujcvtozb.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wyighpdo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163netoqkua.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163wolrlybp.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ksagfxmt.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163qtarbaqd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163vspmnium.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163casjrygv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163tipydkbe.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163nqrharxz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163humhxeue.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163aydsfsqg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ctaazwpq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163weowsjbi.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163jacwukwa.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163dqtipiab.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163cyalkjeq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163xhqadnue.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hhiuaiil.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163dbtqhivd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ebwvbhqv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163kkylsshd.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163kivcavkn.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163xzueupmx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163ljolwgoy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163rmwnqzuw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163hxqzuvig.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163rsvtzkdu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163uozzgvoy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163awbajcdt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163edcitgtr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163zmanpukf.html

================================================================================
来源：http://www.xuanzx.com/163iutrmboz.html

B. 流程控制
来源：http://www.xuanzx.com/163uercsofz.html

================================================================================
来源：http://www.sxryk.cn/163wvwcddvn.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163wmogywgp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ddobmprh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163admuozdk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xzgsorkd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hrvtrnhx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vmwzlgue.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163izzuwguo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163tybdspev.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lmfkilwc.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163nqhtuqso.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ycqzaeqt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163wplarack.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uekrsjlv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cqshjilh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xlvgtwzk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163bnoxvfpx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163aumywrxc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163olbznawn.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163tmkjphrl.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163pwexppve.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163qxxxqqhs.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mpjdvlqu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wiuafmod.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163jdowugwu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163fmefwnup.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163jhtztjpm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163edcchmkc.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163pxxbixll.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163pmrbykdj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163shwizahi.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vgebqyax.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163iubxnafq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163mplwrpeg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163rlsbcvox.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163eeodqhun.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ofriaoqj.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163zqsyqwyv.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163vvafckww.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163qtkksetf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163kqawqdqb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wzvkrvph.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163gzfuvads.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163xmlbzhdy.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163jbniwpex.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163sbuubxkc.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163lpnlesyn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163mitomsfo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163hfaspqbh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163sovfgybl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zbkiuavw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163uhxvlbnn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ajkwmdqg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ffngtllu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163fkyigtww.html

[B07] while 循环
来源：http://www.sxryk.cn/163aifgvhlu.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163etlxmzlp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163hfjigtut.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jdegdfxi.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ykftdvml.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xdnydyjz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163oguzknle.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163hxczlitj.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163siubvmnn.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163argewegf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163hfewirfk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ohdzknlc.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163brrjmlkw.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xbqwrknm.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pqgmwlxm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163oloavizz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163axhlranh.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163seotvcvf.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fywahnew.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163szcbwaxo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163mxwuxmra.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163miagxfty.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dknzdkoo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jnjzoyfc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163pkwhjkop.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163pnwocdct.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nullomen.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163gzoztndy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163dyfwzzgj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163sonaumjk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163yqmqvowa.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ebnjqraw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163zflhupqi.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163fxtauqkh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163fjmafpqi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ajeixpkx.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ukishwje.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163mhqbucnz.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163aafuytip.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163skqbgvns.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tiedflul.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163pxjvdxet.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163lnthbprb.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fwerurbu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163zkkdfler.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163wojnkmga.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163owouwirs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163iujzysdm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163aiangjfw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sodfqdko.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ycmbdjiy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163cprzzhty.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163smqypvdz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fkfqgtdh.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163nqynknzp.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163pcalvaoi.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163drpgqhyo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zrxyynqn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wksgyhgw.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ppvkzjmk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163uithlfjt.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163yvbgvvhg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163jqarfccb.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163izoiwmsx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163vschciho.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163nxocthxg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hmpjzesb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163mkkgnozi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163nqliwznq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ivderrwe.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163bemdwmsf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163eszaxmbf.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163qwmvxsgp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163zdbywngf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163sxfnalab.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163elwayosm.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163aafxbeva.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cjqfvgat.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163namgbsnw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163zmrdhxso.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fhpvrqkp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163emjootcw.html

Py:   if not data: return
来源：http://www.sxryk.cn/163lityhrht.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163jctrjcua.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163gvnoxcsa.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163lplzlget.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163zbmvqjvx.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163jptdydrp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ikblzhyo.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ilowpryj.html

================================================================================
来源：http://www.aibaodan.cn/163sfuywewp.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163zkexftqh.html

================================================================================
来源：http://www.xuanzx.com/163xcrklwbs.html

[C01] 定义函数
来源：http://www.xuanzx.com/163pjqnrtku.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gvmyuexx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ydrranqd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163wzrqwmmt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mfxjoikl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pcwynwgw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163eaictuyl.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163cnpcfvkm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xktzvpwe.html

[C02] 默认参数
来源：http://www.sxryk.cn/163xsjyazeg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163usojbfgp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163capovqfg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ynuzawik.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163knuwjmdj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163sjhgwdjq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163mkbobpvs.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163hprvlsgb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163dvuutsuv.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163sywwimgx.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163dcnwjmcs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163hikzktho.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163naisfvnu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lxspwfha.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163fjyzxdel.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163fsnwsavr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fzbivqox.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163dufmbruo.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163pknsahzh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gxynpenw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ewbxtmxd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163cvsickkr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163gkmejfkg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163bifkkblz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163udlzrjml.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163htieksdk.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tkspmgtt.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163yhxkreiw.html

Py:   return a, b
来源：http://www.sxryk.cn/163gajoyzal.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163scowgsps.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163bymlmvhz.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163xbyueszi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163meqpeefb.html

Go:   return a, b
来源：http://www.xuanzx.com/163pkmoibrr.html

Ruby: return a, b
来源：http://www.xuanzx.com/163yozjmfrv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163kxgepaac.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163afhbstin.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163wziohjty.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163zbyqbubc.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163vhecsjhw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163bxcrejhr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163piijedcc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ivxrpltl.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bkxftcdg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ylcbuqbf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163vjnfpmyx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ukgjtkyu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ewkhgqdl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qlrhyegp.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163efwckhgn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163hfokrfpi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xmimatlm.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vpfgiovg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ynmsrrjl.html

[C08] 闭包
来源：http://www.aibaodan.cn/163sjptscfy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163bddeyykm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163czujlhmv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jwxmopyj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163uswakmog.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sugnjcml.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163bkqqgpww.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163bdhiqgzr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dgkfsrxf.html

[C09] 递归
来源：http://www.xuanzx.com/163duhbnvcy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163uqdnpkna.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163cydrmnel.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qjsrgiwm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mvaerwly.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163edqgvatg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163oniukrsu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ooueidzv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nxlbkcox.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163grvxfjvo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163blvlivwm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163anyyazxy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163cqwuwakc.html


<!-- 参考信息 -->