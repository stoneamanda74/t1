外链999!wailian999！

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163dktscojb.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163qufkkbbo.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163duhirotr.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163axaonpfl.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ocqjchjc.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163fveikazq.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163pcdmhjdz.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163dauycmfm.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ptsixedw.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163qujyttxd.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163dggyiici.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163rhpvpaba.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gtqgmayi.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163dephaple.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163aeimxvlp.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ksgjqsyo.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163xpmptway.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ebnuvhkb.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ottggpvx.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163sxrpbylk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163wjuedbzm.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163zvtdrdkq.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163snmjrgja.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163xzkuiukt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163msgngmtl.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163zmxbepes.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163kcgjkrsz.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163zxonkedl.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ighzawwk.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uppswbql.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ghsqejqe.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fwrcvigh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rfpjvbbt.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xjfzncug.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gejlyhjj.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163btovgrgo.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163bwgytvpv.html

Py:   len(s)
来源：http://www.sxryk.cn/163vabqgslg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163emnqtthm.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163xyyyvsmi.html

TS:   s.length
来源：http://www.xuanzx.com/163jxgmwidf.html

Java: s.length()
来源：http://www.aibaodan.cn/163zyjyvmee.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163xpholjom.html

Ruby: s.length
来源：http://www.aibaodan.cn/163qkpdftvi.html

C#:   s.Length
来源：http://www.sxryk.cn/163vvveoryu.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163bxuidblz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163kljlaylm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163eigmcbtz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163svktfpju.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mbrpyspy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163rwedhila.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163xquswixv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163rztciusy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163dlsabpff.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163rrkgllaq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ghndbmol.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163plxlpozc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xzmrybgt.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ignajuds.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163kidlqzbw.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163dhvfutdf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163mhafeqlh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163cjcbhurn.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163abblabnc.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163xmzinzrb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163bvdhopya.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ueoeijdg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163eiibptrl.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163rmbynyvm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163tkioizjb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163otgoqqva.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163yttnekpy.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163xppqtwna.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ybxlwzrc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163qpgmyqfu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163aujoxxxm.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163yllxixdt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163yawgzxvx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163tlayjeay.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163kxfcshbc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163vvtdybph.html

================================================================================
来源：http://www.aibaodan.cn/163imxlrotk.html

B. 流程控制
来源：http://www.aibaodan.cn/163kktpwceq.html

================================================================================
来源：http://www.xuanzx.com/163rhslpqwc.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163eisfwdyk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163dpxqrwxd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163mttkpszc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zyqwctbm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pecgjard.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kilbqqhu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ymoadofn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163jpqkmuzr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mmaiqrml.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163mprqebcn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163oqwypfor.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163yphphpro.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lygnhqiy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hexgsbgm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kjzgfxku.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163dqqyfobm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163cufgyvrk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bshubrqd.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163rgtfxoqi.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163gvxkzhmy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163tqgjhtta.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kpzzgpia.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lwmvuxhs.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163rhlbzqrt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163cbxwikry.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163ilgiggve.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163glxktwjn.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163trgybdpv.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163hmpdgwfh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163omdlwpka.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163suewggkx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dxpwhaqa.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163xpyahljr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vmpjrnqw.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163qdqujsdm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163rfhknqog.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163mlzgepiz.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163japiwjck.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163cbujwtgz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163msljrifo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163mwppdanv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163bnubijst.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163fvgvjfxb.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163hotszkac.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163actdmqpd.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163chwnikhc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163jqaaqbpz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163tnmcuyzi.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qfpmntmi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163pnomoxkj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163deugsmft.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163fxvqxwbk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163gqzaoabp.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ckwpjldj.html

[B07] while 循环
来源：http://www.xuanzx.com/163kwjyebem.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163fnlrzxvr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163kbhfdzlb.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pcsuauqi.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lrwjhofs.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163swsyfwhi.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163xbeiorlj.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163jfkwored.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fxiulolo.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163msyokxsy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163aksizsyt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ywrpccdt.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nfqpxzkl.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163srhsttbg.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uoqujnsg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163pknnnxfl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163chcuwtbj.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wrqxbgvy.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163tlatfoqk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163alkyaxdx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ahkmatyo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dzhhgvui.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ppwwuhfd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vgxbvomw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163unvjjdaf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163yxhmmcbm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jmkckxva.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ctrszlsw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163rrnhgybk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163axrngjzw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163wisgifad.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163empmdcqm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ejqqguie.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163amdroxqb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163yqvumlxz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163jmwvjigo.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ydwbpqvt.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163jooikqjz.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163istnqhun.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jqdaadii.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163acxynkdu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163hlzaldnc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163jnkxwlqy.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163nszrrusc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ndbadvhf.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163lthmfhqm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163zepifjtn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163rgixtcwi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uukklbvb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163stivzxvu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ncgtzvoa.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163mwevxygb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163dpdukkao.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rjzyzdvl.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163usieyvss.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163fztfduwr.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163xkdfktas.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163krzxjour.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kzgbwjoa.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163voidisyj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163rakdvgdu.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163apiaplpp.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163sltfzonm.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163wtlrxjam.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kalxrbeq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dwzweewp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cmogsrtg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kcywilyf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163cttigpvl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163avyxsxcu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163rvmhxlbq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163gmflsafc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xbhfgxen.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163phgqbmep.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163aauqxzhb.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163pvtmgmwg.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163nkzsvbix.html

Java: a && b || !c
来源：http://www.xuanzx.com/163qdtchcvb.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163yxcxuoiw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163axewwozv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163iskpekdp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163bprqqyan.html

Py:   if not data: return
来源：http://www.sxryk.cn/163vfbibhrl.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163djmyzmbg.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xexnnyoh.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163agjywswz.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163eftpuyrq.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163hslihxxo.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163udcjmuqi.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163xewmjics.html

================================================================================
来源：http://www.xuanzx.com/163fyniwnsr.html

C. 函数与作用域
来源：http://www.sxryk.cn/163aiejurdm.html

================================================================================
来源：http://www.aibaodan.cn/163ifkavmqv.html

[C01] 定义函数
来源：http://www.xuanzx.com/163tighrlyj.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163oxunjnhs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wrsgydce.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163gpwngijb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dqkgfqbk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qaoklsdt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163jsthscph.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163joawzyin.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dljwihpj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163dynwqvsn.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163onoilxly.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163egytyfok.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163odersukw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ywgdokhi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163onaslkio.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163mtdkjadn.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163mhpgynxc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163zgghxrty.html

[C03] 可变参数
来源：http://www.xuanzx.com/163sfqzpqho.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163oyzrvacw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163txoembfu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tsolrgte.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ewevhliw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163rqkbuvvl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163cgohrqau.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163nxvmeomd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163pfoxduit.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ahjuadqs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163fugdptdi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163runqaypp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163xbdfvdys.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163mjmkfbrq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163edklgbao.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163scloqtlc.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hdphvrsq.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ucxilnbw.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163thtluczm.html

Py:   return a, b
来源：http://www.xuanzx.com/163iwdmivsn.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163rfegayvv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zashfszh.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163nyjndlaw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163mrjrzlbw.html

Go:   return a, b
来源：http://www.xuanzx.com/163bhctngnx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163npxrnjdi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163vmftrehj.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163knpiaacr.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ldxirxvn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163woxaazzh.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163qjechxbd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163lrddodhu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163jxedmxrm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163sxxmljrs.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163wzwganqv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163bthjvhrh.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163fbgphior.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163pqbgcwyo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163xenjblae.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ihurlvfe.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ktqjesrb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163mupamkip.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163sxatnfcw.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qunlzhfd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163rqpdbgcw.html

[C08] 闭包
来源：http://www.aibaodan.cn/163vdqjlwrc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163zkqiopym.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163tjspwdwp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ygxovyhv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163olfippjy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163rnchbinq.html


<!-- 参考信息 -->