外链999!wailian999！

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163kedasfiv.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163hlmtpnzt.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163xxdzaads.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163vjvfexee.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163uwremxkw.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163dwfvaeql.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163ttajcknr.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163ceiuufrm.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163iyqmhndd.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163pdhnbcyp.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163gmicmqie.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163yplvloza.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163nlemsvvx.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ckoxqrnj.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163otzsgvbz.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163mdctkbup.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163dgnvmazc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163clbkcafk.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163zxiujecg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163cmpzptrv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163wooxjolw.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163ogjogtex.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163bmamlaby.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163fqrjyhua.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163kjhkfhxp.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xmysxvjb.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163qodzbhyz.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fpwynqtd.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163sdjymbsu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qtrasgcp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bfupzbmt.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163whhecwig.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163jbnbbiqq.html

Py:   len(s)
来源：http://www.aibaodan.cn/163vdeszyrt.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163mxiyyrks.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163manihdjr.html

TS:   s.length
来源：http://www.sxryk.cn/163ovxszdbz.html

Java: s.length()
来源：http://www.xuanzx.com/163umchzxmc.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163ftesijak.html

Ruby: s.length
来源：http://www.xuanzx.com/163raanoyxj.html

C#:   s.Length
来源：http://www.sxryk.cn/163tqsvdfqm.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163szlvfbrh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163xqtqdbuu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163kygbsliz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163eaegbsax.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pxyuplmr.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163faswasoz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163xezmkbng.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163tcftkvwr.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163qfsafwov.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163wskqcjpy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163cnzlgryp.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163dwdephmz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163nwwogxdj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163micoinsk.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163darwnqdb.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163wjhletur.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163jsriouuk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163jkrdqgfu.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163pawyfdra.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163nkizrqqk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163vcldomrs.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163zooorcfb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163wpesbgdf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163oqkrqahd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163tpdbjudp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163aenhaxdk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163xvhynptd.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163tcsewzot.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ioerrbfz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163jgxfexxv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163bnwmhpmg.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163kijvrwql.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163hhtbtvcy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163cpupvara.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163roeunesi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163tftcownz.html

================================================================================
来源：http://www.xuanzx.com/163jthvjlol.html

B. 流程控制
来源：http://www.xuanzx.com/163hdgvlywy.html

================================================================================
来源：http://www.xuanzx.com/163tbjxhwhl.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163bievgsng.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163pqmvgonx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163vhwgzkvn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163iaapsplx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jzbxnstu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eqshljfm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163iadeiheg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163hfnfgpwr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jzctvgsy.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ywztsknn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ohhmcjou.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163xlbwtiml.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tuxjeqmq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kiosqmpf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gaprcggh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163anbhbxpf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163dcroacbv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mnrdbmho.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163qopegkku.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163kpvandqv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163qztqykwi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ttimrbbj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163haxapxuj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163epvrjkut.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163uzizciyn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163jsljqlno.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163vfnincqh.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163naaarmqn.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163zxtjjfno.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163btfiunsa.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ruccoynv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163oihdwrqg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163oanssxdf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163nmzpgzkk.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163isqvmabm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163jwkujqcc.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163zwmgmxqt.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163vjvbmben.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163qpsufpet.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wxegqwmk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163uvobzzgy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163nynrwtmm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163wyzsjbdz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163jcrswhsx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163oxhvzuqt.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qnsgjotk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163pkugjtbt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163jcqirrdp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jxpbfywz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bimtwbxx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163zeaiocku.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163omweoefx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163iycezbxl.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163orsdmzip.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ogklfnxi.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163fcukslzy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163wcpcangt.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163oxqowcjw.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ivdpzfoi.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pxhzkhqw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163jcpfzjac.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163fhfpqvuv.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163buflbgjj.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ejbfzgix.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ommbrsup.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163krkprlri.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mtkekpov.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163leoyqxiw.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zsoynygj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ukwaybyw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163vcovcyen.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lwwldckt.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163nyxsbgrj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163tjgnyyum.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163lzbpklpi.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xwdzrmgg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gbauacik.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xkmwfasa.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163paterfzz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163oxmbriea.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163olprwyfo.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163dgbqhepm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163kektkedl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jetyesel.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163dgtxhtpr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163tlidfptm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163madvkzvq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163qcxbnjtq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163nzzvsyhm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163wnxpqepp.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163pckcihgy.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163fhuzzhvn.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163bkleyoxl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163khfdomdq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bhuydvdp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163esylgcko.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163aetunsmk.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ldxnjwst.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163abyeooeg.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ktuexobx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ghrsxhre.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hrzbtywi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ghnbucqw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gaxjezsu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qnfrcbox.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163etptyppg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163iymusolv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ppmqmmlc.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ldfxgfcq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163hirjtfof.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163kmkvbldn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163riwyzwao.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ekjfwzku.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163facwkwmt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163nphyzozp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163kpsuaeuw.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163mdatbcfs.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163syxccyay.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ivgqnncp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163wtadobdl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163sempyssu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ucexgqdy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163gxbauorl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163hrsnykzj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163oisdxpye.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163bjqopvyu.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163cbyekumo.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ipahyavx.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wbslvoji.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ixqosdlm.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163egbflbvm.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xrufrpff.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163aaqgwigu.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163guyqgnqa.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163zgciqekc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163jmftrrvk.html

Py:   if not data: return
来源：http://www.xuanzx.com/163hvbshdle.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163erfxheac.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163bmtntxwm.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163akrxeakr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fhsisniu.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ueglytyd.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163noqeermu.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163latxkfam.html

================================================================================
来源：http://www.xuanzx.com/163vkgwgrzh.html

C. 函数与作用域
来源：http://www.sxryk.cn/163xrrttecy.html

================================================================================
来源：http://www.sxryk.cn/163yatdlbso.html

[C01] 定义函数
来源：http://www.xuanzx.com/163zxauulxy.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163svjrfykl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163eqaxadwo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163adogjmmg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163utwvxdmc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hobivigj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163wddujcxw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163bbmvqklq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bmfmeiam.html

[C02] 默认参数
来源：http://www.sxryk.cn/163sedbpbvd.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163lxesyhts.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163jpvvzlgq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163xgduakvv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163liabbqir.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163huenpwvl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ctoglujx.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163suabbdlh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163imhfamzf.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ajkcicfo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163qrxzwwwq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mhwdpqqp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fsmkvqdn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bemfmrhk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163skklwfcy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163uxgdujnt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163degrvajn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163cahwjgjl.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163sxkjexav.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kumngriy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ylthjcqb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ijbmlhyv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163rmtighsg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163wwlaupcf.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163zdtxbsvr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163abdszrtk.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qwsvtbux.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163uavfaohi.html

Py:   return a, b
来源：http://www.sxryk.cn/163ausjwfpz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163tceiaupj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ooowwjkj.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ufoywcmw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ncnuzfud.html

Go:   return a, b
来源：http://www.aibaodan.cn/163kihyguyr.html

Ruby: return a, b
来源：http://www.sxryk.cn/163yyitunvo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163gbvxnubr.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163cdayweab.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163pqatigba.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163jtqxupre.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163dwruquni.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163nlmlinct.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163tkdvmcsv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163yndsjnch.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xrawtqov.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163shegrfac.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163pfopggov.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163aluaobif.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163mprcsaiw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163wexowhux.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163mqqigtkd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163rcsrvxtr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163kwtaixba.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163iuwwvmne.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163jvivgixg.html

[C08] 闭包
来源：http://www.sxryk.cn/163yuastbiu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163bbtkfqjl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163wdsfatdg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nsdbrpnc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lkefdcoc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qgtywnvp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163wbddtbmq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163jclxzroi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tkpiptfv.html

[C09] 递归
来源：http://www.xuanzx.com/163nliaduzz.html


<!-- 参考信息 -->