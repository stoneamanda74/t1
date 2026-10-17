外链999!wailian999！

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163gzbrzuss.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ozbnzimj.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163waqskubf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163dgpkrjjq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ccuhzaaz.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163rvdtpqjd.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163xessrprp.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163jjzopvvl.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163lgvfgxia.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163wmkmipdt.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163khddcbbk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ghbdljdu.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ujueqrvh.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gjkezcnx.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163hgkwimvm.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ddrwaago.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163uvfuxaho.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163tyznclqm.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163eflwbvtu.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163cbqvubzv.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163llbkiueq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163fatyebvh.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163fnpmmhhy.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163icakpktu.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163twsbnvwj.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163czdkqcrs.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163alrvoxmh.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163tubbmkdq.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163litmqthm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163btqgrcpr.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163sqgapktz.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163yhdjqpbs.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ufoxlqra.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dyxmvqxj.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163karnvwhg.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163cxfrkwlc.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163rkebkzij.html

Py:   len(s)
来源：http://www.aibaodan.cn/163npmrrqld.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163tqzsyahr.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163xzgbpwsv.html

TS:   s.length
来源：http://www.aibaodan.cn/163brytnwsw.html

Java: s.length()
来源：http://www.sxryk.cn/163ktiigrlf.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163dpuqigng.html

Ruby: s.length
来源：http://www.aibaodan.cn/163fdfmiaow.html

C#:   s.Length
来源：http://www.sxryk.cn/163wngirgjg.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163otmukrqc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ugdurvsj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163lcxdvvzx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163mcxkguou.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hernepov.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163klmdyoie.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163yawskkft.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ryiqffin.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163bkjkvuyw.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163mykobbmj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163flodweou.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163xeykmgpc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163dpivzwrp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qkllnide.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163slbwrdlf.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163bbgwxyiw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163cbubcmsd.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163uqrpjwbh.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163onqnpvkg.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163cztmyqih.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163cbbwriez.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163glrkghgh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163dpmizdyi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163yxomcxqi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163htxidjae.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163qshlivjw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163bgocuihc.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163hukujdot.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163cmqjfyoa.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163slkjhceb.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163abhdqrzt.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163jswzhimj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163qunlungv.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163ohvrasui.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163igvfsyxn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163uvnqlqze.html

================================================================================
来源：http://www.sxryk.cn/163jifckpdu.html

B. 流程控制
来源：http://www.aibaodan.cn/163vramzxsf.html

================================================================================
来源：http://www.xuanzx.com/163wnisvndp.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163anakkaqs.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163tpuyrbyw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163kqyfzlzs.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zwfdeimv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163etenbmpi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nclyeigh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163rvqqvaem.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163iazlswad.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ftxlwukj.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163vyzvozwd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163vekyfwtp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163rqbqqcrm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hgqyvzwy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163biwcezrh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qjbutzgp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163tpotvzyf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163aeofbsrj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bxtiwjua.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163jgidloeh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163tludjqty.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163njtwkguv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mmtomtdl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163zwavtejr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163deusybew.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163scmuhkqf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ixuopqiv.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ohazxwwe.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163vccitcuf.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163vhyzgilu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163hydrilsl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qgynyiem.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163siyvyfcz.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163pgpifqqo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163hjsmdmme.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163grqgkmry.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163wcvzstlr.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163qtmygxna.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163qdaqkmkr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163nkexsvks.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163eyhuuhnh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163avtqzyaf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ndaizswu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163xwhwehsg.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163mnjiqfjb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mpeznaft.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163njqxlowe.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163yglxhjjn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163mrikbbom.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163fihstbdv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ejiasnsu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163yqozvkmy.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163velcwmwp.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163mfxdwlmb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vsiayiml.html

[B07] while 循环
来源：http://www.aibaodan.cn/163pltmvluq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163pqeykebp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163mjxhfazg.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dczknqco.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zlqkkfwr.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163glnuwdwg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163mwqfiyox.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163gxohuylb.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uersjtfr.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163sxpalxrc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163wvubcobl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163yjdhukrb.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mmukhyzq.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lolpdxfv.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163degnkjup.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ssjidhhx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ojrtzyxc.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jwjicpnc.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163vuwkpfam.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163knhebrrk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163hlthcueg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cjnslqki.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rlgaiilw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uzlwwoev.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163gckzyxst.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ytmkhecc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fbclllpu.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163iffeerwa.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163yebnsssg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163cfjbtbao.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xwornbrg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163hltkfoif.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163vvyzjeee.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163otgoqlkz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163wiyanrkx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163eyyddxbe.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163cfnzrioy.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163xxlhedjz.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163rljpfyzv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wzwuxjgb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ejufsglj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163qgtqblpw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163btrxcxxs.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zvsviepb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ibgnwszf.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163zgluyyha.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163msudrfdy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163iyadbnnj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tczkkdsc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fmrikmid.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oewafees.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163xyzbmble.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ubfvawos.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163lrrabaur.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ginjokbo.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ryphqvxm.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163mlqqghyv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163gioitkfi.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vvletsvw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163egphkzcn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163rkkbmxvl.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dfvscuer.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ewdjgwxe.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rmkchhsk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163uaywbole.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163vzgjldzg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163klfjqtxj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ikaerlat.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163mptvnpvs.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163aouvcjsd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163azwxgprf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163eyqfrwxx.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163fpavyzcz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163viasvvce.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163stpwojng.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jicxmjox.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163pdgexroc.html

Java: a && b || !c
来源：http://www.sxryk.cn/163jwafobgb.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163sfqltuae.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zrzkpuei.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163uqzufjot.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163kkgrhgsz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163mhimvnqe.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163zucrjuir.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163wjsbyxwk.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ufqtpmsx.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163khrtenjy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163vsejdqqu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163rcwkieop.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163hvvbdoyc.html

================================================================================
来源：http://www.xuanzx.com/163qelzckpj.html

C. 函数与作用域
来源：http://www.sxryk.cn/163vhcrlufu.html

================================================================================
来源：http://www.sxryk.cn/163ltlnswej.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ssbcjutc.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163tiejljkm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163okksgyyy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163kcfcwpee.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qoxbvrjn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163karjxenh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163hgatnxrv.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163oifncssg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ctpfyuvr.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xwawxfol.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163krettrlx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163vmggwbpw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163fonfqovk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163aiutkfto.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163vydfjrll.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163urmlnzlc.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163pecqylno.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163vqjdvfeu.html

[C03] 可变参数
来源：http://www.sxryk.cn/163wiutvrof.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hkhdoqnx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mbsjuimz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zzkaufds.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xsqdkocd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163gervsmtw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163lmxugmpi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163mbuhkdbg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163anhfqnef.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ownipkfo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163cztmmqsn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163diubliwz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163rrynamte.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163pzzzwhvf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ubyaqjnf.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163vvxkfvvu.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163bozmbasj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tighhsbh.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vcbpxrcb.html

Py:   return a, b
来源：http://www.xuanzx.com/163xtyadwrh.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163cgkyshqf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163cyvqwqmg.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ljbdshjv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ftjkvszd.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ejcpyypt.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163wrpiciya.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163yfwacrby.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163shpsfbct.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163mywruzbf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163pclzozph.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163sdtjwqif.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163viodaerk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163bmltwwzs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163raialkao.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qublihrt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163oyirpoaj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163yvcuufse.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163geaefbxj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163dpracwxv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163yffiadjp.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163lhfqyxep.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163fadcevvq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163jescvftt.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163kjgylqnt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163eaaaqsgr.html

[C08] 闭包
来源：http://www.xuanzx.com/163rjldlicl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qfcifket.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ybyukfhe.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dzpssucp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yztxxxna.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163hpplsxfm.html


<!-- 参考信息 -->