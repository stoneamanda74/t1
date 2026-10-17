外链999!wailian999！

[A14] 注释写法
来源：http://www.sxryk.cn/163bqmurtzg.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163bjznbgqr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163nkbrgvtw.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163djprvcag.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rmvaiqtt.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163dkcuwitr.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163bbiwbufx.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163xrhxoify.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jblnomic.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163udxqnzts.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163aujzzowf.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163fmmdunap.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vsiggyca.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lgsgzgwr.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163mjkivbma.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163lwjpugtm.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ifhumkdh.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vhezdjxk.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163fyuunlql.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163qqhnqfuj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163zqiptulm.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163zoecvcqm.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163sdrbzkeg.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163txhssskm.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163wzdtdfez.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163hibcbhcp.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163fddpaybr.html

[A17] 位运算
来源：http://www.sxryk.cn/163pkljcidd.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ogkrslgu.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163vzscgghm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163egadiqes.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163tquhlhyo.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rcvdhqby.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hargbxoq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163otimfyzy.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lazayrjo.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163huaghisq.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163vtctqsya.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163qcjojajw.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163bbvltiuu.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163yegjpfhw.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163jwnhiyny.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163kxtcnddo.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163xgevrool.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163qktbzxtz.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163uwxvphxf.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163xvkzpguk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163faioppsy.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163taavpcit.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163btqpllel.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163bsrmndhc.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163pphtlzcd.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163rwhnrfbs.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163npvtxzhc.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163hhedygtj.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163dlyaqeec.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163jlbikqgy.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163irpwdpoa.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163zmtcqwgk.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163xtxivtmr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163pgzmgiit.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163agepzevb.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163fifnfwzd.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163pbyzwazj.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163wkrysjqf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gofluwqz.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163scnamaon.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163eaksjkoh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cqmjgxfh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dcelwqjk.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qgyvjfow.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163vodghzhs.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163enqydgcu.html

Py:   len(s)
来源：http://www.xuanzx.com/163uoyjstng.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163kjzrtzlu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163qfwpdlxm.html

TS:   s.length
来源：http://www.xuanzx.com/163nrovoybk.html

Java: s.length()
来源：http://www.sxryk.cn/163cvtmjyfs.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163fhxmayme.html

Ruby: s.length
来源：http://www.aibaodan.cn/163iqngqjwd.html

C#:   s.Length
来源：http://www.sxryk.cn/163wgkedmbp.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163tfrslorn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163mcteioye.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163hwculzuy.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pgfdgotm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mqhljled.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ekegnjfz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163jqdduhnn.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163jixyjhpm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163onamlkgt.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163edbeuzhw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163pexfqoou.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ahscvtuv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163owyzdxti.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163caapmsks.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163mbslrdgf.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163akutyjxn.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163gyspnnog.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163mvwsbywe.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163dqcawgnt.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163pnpnjuxc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163uzdtgxgw.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kfnqgzgc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163gycnngcq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163dgckpmgx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163xcpafztg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163kwsmdupt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163qcbriehy.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163sksyrtva.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163zplmxgmc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163umqhjdsw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163hozbaoke.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163nphjrhsn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163qduivauq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163vsqhfpan.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163eahatevw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163byenvtth.html

================================================================================
来源：http://www.aibaodan.cn/163clcglctr.html

B. 流程控制
来源：http://www.aibaodan.cn/163fvoshfrj.html

================================================================================
来源：http://www.sxryk.cn/163hnonhwdf.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163kfjjkwjy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163qskrrcir.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163hqkhojds.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163znjvrpdd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qjchrihn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ewhuwdka.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163hdxsesot.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163dsqoujqu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ikdpjail.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163gozqartt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163wfvphwgg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163yercwvyr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163udzasbvl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vrqhbpvt.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163abhjegwk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163cwhmxaka.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163bddidjtj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vapvfxvl.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163xjzgffar.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163jwidvuvt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163noymvbfv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bctsxwhu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ivihamhk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163jitvwmgk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163eyknromw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ddxmdbit.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163jgxullou.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163runyltbd.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163autzstkw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163rkagsimb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ckciusad.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hzvgwrix.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163kedihzdn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163kcfeprjc.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163dejrkrou.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163kkiialnm.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163xrzabyxq.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163olnubgdo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163kfoiacso.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163khpwnspp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163sbuefaac.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163jdjxaurq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ilzaslkt.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ycitwyas.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ligkjtrt.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163zmyitmpz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163whyqtifv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163tqrvgqeu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fdivqpmy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163keexsvoh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163qepnvemu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163gzumsnys.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163vwytcvjw.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163btclyicy.html

[B07] while 循环
来源：http://www.xuanzx.com/163bzqrzifu.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163wdbujiwn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163zwencnde.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qjqyuice.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xatokyam.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ofuernyy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163zbofevns.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163bixrlewc.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vyykzyuv.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163nqltnlqu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163uirwomgo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163nkemmvtz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xltmaitz.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gslbrjip.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gzejjmac.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163umgzusna.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ogjxnoez.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ajekjvaq.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163pvjcjbee.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163bppxexju.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163bzuedfop.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wsyzfcrb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163calxiimp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vwzyiiun.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163zakageno.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163nplywkwa.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163acmnzldi.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163fuowarwe.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163crxkmlle.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163mdxeefem.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163mfbkluiv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163yyhxgpeq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163eoinvhsj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163mcpkdlst.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163yemlzjrx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163bikfobej.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163uaeotlea.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163vxzvhkfa.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163gkkspayo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163cvzdaedg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ikauhztq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ypycklca.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163aanupimu.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163pffneiui.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163bbgmbian.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163slttpvug.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ewxytfzw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hbdpfvbg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163evhzbnuw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ssiqiywy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nacdwpre.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qvgspcft.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163kgiefwwo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163gzhmpuyh.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ckfjzoxd.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163gowdljcv.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163rcaqaiia.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163huznhwpe.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wgesmehh.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163supxyspn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xeleyypg.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163dfgkpown.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163mtqzvbhf.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rpikahmk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163gmyuttzg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163yelajxjx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163iawyvqki.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163paexfwsv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163mammlltn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163mzhlrdko.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kniauwqp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163xvtquqta.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163lbrajuzj.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163hfrulyds.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163riuihjyc.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163qxsvokwq.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163omnjydui.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163duyouvey.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163pacixzkz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163umefzdav.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163wjbvhyjk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163pkosllbp.html

Py:   if not data: return
来源：http://www.xuanzx.com/163bkrtwsmn.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rjcppwka.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163evmenmku.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163tybkezfb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163czqsvufc.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163kskezulk.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163rljhorgo.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qeogkeuk.html

================================================================================
来源：http://www.aibaodan.cn/163qulbgibd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163jmiplfll.html

================================================================================
来源：http://www.xuanzx.com/163fixkokiq.html

[C01] 定义函数
来源：http://www.xuanzx.com/163gombjpdv.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jdzyikzy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163eqfmwjug.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163umepyccq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mitoqfvh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lgrgmbcc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163cpulphdy.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163rzjyipeh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fsmrglfh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163emuwcmgx.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163xntucwws.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163mewjpojg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ihmetikl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163dxqkoves.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ikgikhml.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163fopgufoz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163prgygwbu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163fddmlgvm.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163aczotahe.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163nuoisjax.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163wgxqjbgr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ajgjyppi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163mgpglrdm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163mjpmtkul.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gqsnaoxz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163sahpxsac.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163akijgpui.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163fwodnpqy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ojblvdbt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163qqsatsli.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ubiwytwv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163goajngky.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163yigabard.html


<!-- 参考信息 -->