外链999!wailian999！

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163syhtgvxc.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163unpnomdr.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163yufkpyjn.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163sqvotsgp.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163edjastoh.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163agrnwtwa.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163hdojjinb.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163pyqekavk.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163gqwqgyuh.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163emigquhs.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163cdjjjidu.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163sxrdrhox.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163qrelmdyb.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163rbvovbey.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163llxkzpen.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ekhqziqp.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163bcgnpect.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163agxsxsnd.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163szaaszws.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163kqvtriow.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163mgdwudad.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163snkmubok.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163cctjejxc.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163zdpanoef.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163neiikvsa.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ayeudsnh.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163fhpbeznd.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163pejzczuc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zcamuwgg.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qchgtoio.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163aweuszpm.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163nzneztsj.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163ufckwbnf.html

Py:   len(s)
来源：http://www.sxryk.cn/163lructbvy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ofmvmuma.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163hcoqvhtk.html

TS:   s.length
来源：http://www.aibaodan.cn/163kuxnnjoj.html

Java: s.length()
来源：http://www.sxryk.cn/163szvsbypi.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163rhtzyhbu.html

Ruby: s.length
来源：http://www.sxryk.cn/163qlinvujd.html

C#:   s.Length
来源：http://www.aibaodan.cn/163vwqrsroq.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163hnbczjsm.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163gswcbdtd.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163hcvtccfz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kchepnzo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ublocjmt.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zrdlbdrj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163cslgqxqs.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163vhtihnwq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163aszrstvn.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163psivjila.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163bnetoogw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163crvcyvdh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163fmryeuly.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ustzjjhq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163vqpyasex.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163rkcmqcaf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163bwkjrzmj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163mvdpiwcr.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163sxlliwnb.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163dvjhcquf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163uzpsdorr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163phgvroqy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zmheqtbu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163ccezlfzb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163jhzikdys.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163dlhsvfpa.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163tfldtukp.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163nljgnfzw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163pyfaoicz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163fndiribo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163nusasqmr.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163zuwecilq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163jieuffmk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163kszstuok.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163vcvcvxki.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163hthepesv.html

================================================================================
来源：http://www.sxryk.cn/163sufmjxnf.html

B. 流程控制
来源：http://www.sxryk.cn/163ugmajzva.html

================================================================================
来源：http://www.sxryk.cn/163ljnepefs.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163azhrerxe.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163jcizuuvx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163fhegybcd.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163aaoxwfhu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qhujhbvu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cregoxjy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163zwxxfust.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163htmhbuul.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zvbyogqx.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163iclropwj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163xrqlkisr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163jbmwvxtx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jofxzpww.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163glchfovr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163apshmvvc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163nlrdgxpp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163wyhwfkoi.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xuyepjde.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163munyquet.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163lwxwwrld.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163voqkzffr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163kmcgqwxn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163uritkdek.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zgeysaww.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163jjlsyuzq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163hjzrjelg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163pqszcsfk.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163duymeybm.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163uudnojlz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163rjayelax.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163yjafinhi.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163yurmzkwk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163flwjtsxy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ukremawq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163rnfjcaha.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ubnamekk.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163cjytbphp.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163gdfkwwvu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163lscbdzdn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rjsaqevc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qaaszuau.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163yemvmyar.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163gkywikyt.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163nsdrvgiz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163eriifrvv.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163yekkfncv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163xkqlaihr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163hqtrvmpz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lkwgucon.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nzwqtkua.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ryshruce.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ykrebvet.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ipdbfwzr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163zuqkwlpr.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xmwvknlr.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163dyigcago.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163bxshpyju.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jtcjyipu.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jabydgnd.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163trznaibs.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163tzgynnqr.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163tzwvnvxd.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uxyfjftt.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jlknhcsj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163yuynkpvh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163fiatdivj.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sxfumqwj.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cdxjlicg.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163blwdtpxt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163nmrdnkng.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163snsgnzcm.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163knxclkga.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163evbxbzbd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163dtrgfmjr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hvihvxao.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hvjntjuo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163efykugfi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hevpoxfr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ycoygwjc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163fmkzahgm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hymgqjwm.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ztnbbfzp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ydopvyqb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163chxyvedz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163pcaqobxt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163rcoclgtw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163hamhxkqg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163mdxhxekh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163htghyzvf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163rfdqxdwp.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163cvivjsvb.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163eqakuyyn.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163iajqdmbz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163uyepbmss.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163idehbvgd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163qskglgpy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163admljpdk.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163negkpabs.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163jemdlchh.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163sbxnuuzr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163gfbzywku.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163lhmxhjcf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nhonlxsi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bikuyutx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tdqqjunr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ludpwcqz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qhoxvvam.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qjqzbvjh.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163kilapcha.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163glfflhpo.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163flzndhix.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163kpvvbisq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pubvwmrg.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163duohlrat.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163omnyhasa.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163drvayrcj.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163podiuuwa.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163jehxqeqr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163snzjvfug.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163mcmflmbr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tjurzcuq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cbcsebxj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163kvolefdv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163toucchmq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163oovklwgl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163tgnlgstd.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163qdavfjdb.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163bjgphetv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163difzhoyr.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ulkdotzw.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163hdmhcmxw.html

Java: a && b || !c
来源：http://www.xuanzx.com/163qrtjesyb.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zxxwgcfm.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ujyictjn.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163qfmwahhz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163rqklyvih.html

Py:   if not data: return
来源：http://www.xuanzx.com/163iexclhvv.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163oelldgbn.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163qpmdbpms.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163gefgmsid.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163yziaeseg.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163vbsfgvml.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ixlzdism.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163uyvgixvv.html

================================================================================
来源：http://www.xuanzx.com/163afozwbxo.html

C. 函数与作用域
来源：http://www.sxryk.cn/163kiznjhgg.html

================================================================================
来源：http://www.xuanzx.com/163rjfromwa.html

[C01] 定义函数
来源：http://www.sxryk.cn/163gwvymvmr.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163xuainrek.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163uvjnbbtw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163qqvhqvpt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bzdasedm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cskqqivn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163vukkpsqa.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163tmcyfvxi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ppuqamxv.html

[C02] 默认参数
来源：http://www.xuanzx.com/163fcvdjrla.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163mrywmjgg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ivafnncy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163jbasctka.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163auzsvudc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163wgrlxsyd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163mahdnklr.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163prkpgwoj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163qlfdtidx.html

[C03] 可变参数
来源：http://www.xuanzx.com/163yzaommop.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163oibtanzf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163znzwtbpr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dkitwhis.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rtdzxgue.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ouajkwby.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163pwmcszuw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163glslsspf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163hvhhuepb.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163arknursu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163kqhvftzn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163iipiylhv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163nynqhrsh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163gzlmackh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163frtvmbjn.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163uvpmzfcy.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wsnyqswu.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lvbsipaa.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163yfkjkbua.html

Py:   return a, b
来源：http://www.sxryk.cn/163zwzmjrxm.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163mtteoojs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163mnznwupb.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163jajclrwa.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163jwlqkbwh.html

Go:   return a, b
来源：http://www.sxryk.cn/163xznjlver.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163nwpryoji.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163emliyrzg.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163lpjmbrxo.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163bkebeber.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163sbfsvsgo.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163rdcvutnt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163romavilh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163amazhjtz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163eowtveks.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163xfeufuzz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163wnlnjgyh.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163npbggbui.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163uylydigv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163krucrzou.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163uvckzdni.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163imbtywvn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163pvzzwqes.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163owbdslyw.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163iqffetoh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ajwsruis.html

[C08] 闭包
来源：http://www.aibaodan.cn/163crfcvkos.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163mjvxhtkh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163etqlilgs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qmeulmyh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163reomimjh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163abjciplf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xcbfhoto.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163giwyltou.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kqjsqjzd.html

[C09] 递归
来源：http://www.sxryk.cn/163znmslgts.html


<!-- 参考信息 -->