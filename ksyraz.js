外链999!wailian999！

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163vtgoqglf.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163irtwkwfa.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163dhmczvqr.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zvdxrseu.html

[A14] 注释写法
来源：http://www.xuanzx.com/163lcggwhlr.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163beqdghdi.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163jpvykiwx.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fisiengp.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jgabbtbe.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163frxzkozj.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rfqonxfh.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163lnrlyfeh.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gqnlgowb.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ghdrnilw.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163ihfhlsmn.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163xwwzmozf.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163pteqwujs.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163euziypnc.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163olrkmpww.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163bxkszyqo.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163zriwpriw.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163oprkmpmg.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163btonuoga.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163vazdgmni.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163hrgjshel.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163kzbbptlo.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ehniikwi.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163mktpzwci.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163ribwsqpg.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163rtpsfsld.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163hhdhazxd.html

[A17] 位运算
来源：http://www.xuanzx.com/163ydhfvhab.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rrcuqcwl.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163qulkruuf.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tzmhlnyr.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163tvvzcoau.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ksxtlmir.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ajyvaxvr.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cgtvrxrd.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vzfyados.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163hfuuaynd.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163dscrisca.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163mtqamqfm.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163miznvprr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163tvoahaym.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163zlmgacof.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ptterrub.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163vhvqmimj.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163nvqmxzyw.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163woksubph.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163zesshqmx.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163cldibfqx.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163puwynwbh.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163qdunogie.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163mexsaaiy.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163lyidurma.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163rkchpvgu.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163kawdsomr.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163lvvygaii.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163wroabomw.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163xeukukde.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163zwljndyv.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163yfrqxpyr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163duvquxnk.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163aokmfycc.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163nvvdozly.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163vsqxjlfo.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163rysmabje.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163hqdkxlua.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163piiwejox.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163jkxoadmh.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fyygarlq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163fyajvyqk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163fyvfvnyc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tcmmcpxx.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163tkwlafnh.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163doknadjo.html

Py:   len(s)
来源：http://www.aibaodan.cn/163hkpjmuhj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163yojqrwwf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163rujhguno.html

TS:   s.length
来源：http://www.xuanzx.com/163erzkyxiv.html

Java: s.length()
来源：http://www.xuanzx.com/163sauriggy.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163imhuehey.html

Ruby: s.length
来源：http://www.xuanzx.com/163qopswert.html

C#:   s.Length
来源：http://www.xuanzx.com/163nkluoypy.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163efedwiww.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163suxlneuy.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163xucnqdnh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pxblxmbe.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wvpwfocb.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zbokynjc.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163dcmlioqt.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ocbflgks.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163omqlmduv.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ziodtgnk.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163sbyzgydw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163iowpmhgn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ijikarfd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163cctsgtau.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163mojeykhy.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163gdmgxqng.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163nkecbsuc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163demnxivq.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163fnxekhsi.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163wstvhtqa.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163fdpcsuuw.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163znjpgbye.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163wbamiklx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163guconuon.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163rjmmusod.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163kzueixkr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163mbkbbpyw.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163nmzgpdxt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163dxkyrawd.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163wzzgfnve.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ooujtndp.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163zsldoxig.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163wqcwqysv.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163rywtqrpr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163lpgwakeq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163hmrjllwz.html

================================================================================
来源：http://www.aibaodan.cn/163prmtgkgd.html

B. 流程控制
来源：http://www.aibaodan.cn/163dbczohof.html

================================================================================
来源：http://www.sxryk.cn/163enjxzgmd.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163olyvnopy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163lehfdzhi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163iffuqrre.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fqaixwzt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163sxstllux.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lpjoazbw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163mmvhxgde.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163opnqwemo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zguughdf.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163cckztago.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163wvtzbyhd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ciizdbgp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ixmzmnyy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163srzbzcxg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qjzatfsj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163vpielluz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163blpnrvka.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bkahvghf.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163okdszczk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163wxixturl.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163pxbuvuac.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163euamiuyv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163znsmatuf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163gilmeebb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ahcpppos.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163gyvtugqq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163nhznbbrk.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163uoaxkokg.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163xyriwvgm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163hjrcucby.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vkrupmlc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163furnrtxq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163adrdlkqk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163qsnrzwvl.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163btqibbxf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163yalzwuhn.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163kldmjuce.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163keilrukl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163livhebhj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163gxbmujka.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163endnsbcj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163czhrgcoz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qoglvuxs.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ijvulqkv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163qmreeopg.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163lbmvrtdl.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163epjmsrdf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163pzwtqwkj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jwjujids.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jkvorwrb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163wviciapv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163sygbcbdh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163bdetghqk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163vecjljyr.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ndcmkxrj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163wnxkbxmo.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163qulkegza.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fijdogmn.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vbpfqajz.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163oltjjerl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163wemhyidx.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163zossadwb.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rtlxtalu.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163otlmktzt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wvmvtkwy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fzbtpayr.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vjjcytgd.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mgqyclue.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kvvaycmi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163onahygid.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ivswcssg.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zsdkcsfd.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163uqqazoyr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163kvznopri.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163jmipakck.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163owkwatof.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mzcrmglc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163oubmbdxp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pvwyvqss.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ywqaxknu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gwmirwvn.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ozuxfyco.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163nymvofeu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163fgkmiivy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163lsunszcq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163dwrqnsvv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ufpkikio.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163zlngosnw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163wifathgh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xlbkqqva.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163bpjutedp.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163hspukhqn.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163wfscpods.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jdbtyjsu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vckplzyp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163trtedgvz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163vzziikiz.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163qufazfwi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163vyvqhqqr.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163bzjnbaqi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163qqzxhwiq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163yvarcmzv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163udivbogu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tygrkhmz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163znjnotaz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163crozlcdh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163zxbjrsap.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163sikkfhuy.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bkyyvjwn.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163kndhotox.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163socendud.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vvpzmkve.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163btoimxxm.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163euipmddc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ulfqgfhq.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163evzzdesi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163swgrpspv.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163mrhevqep.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163doneeksp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163jnzetbjd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163nzuninhp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qaaeagtl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ekgjwdhn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163gzxsjwid.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163jitbwmnr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163flidjqlk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jsxhzwsy.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163hlyiqiib.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ghovrmbw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163lmfzdztf.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rszuuljt.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cvzgklmq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163axcpvqfe.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163lbuadfii.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163jxdiirwc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gabgtkpj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163jcfesofq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163vezumekk.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163hhzlaxoa.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163raycsice.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163oqossoxe.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163rbltssft.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163gesbnili.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163iqqflsxk.html

================================================================================
来源：http://www.aibaodan.cn/163hpbhzswy.html

C. 函数与作用域
来源：http://www.sxryk.cn/163dillmkav.html

================================================================================
来源：http://www.sxryk.cn/163anfbavtu.html

[C01] 定义函数
来源：http://www.xuanzx.com/163hvlkoexo.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rxzlzmsb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163uncbvyyw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163fxupqyvm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hwbhyxci.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eveekmoe.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163hkquexba.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163qbbzpikg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163oxvhcypt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163rwcvtwpv.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163vqxjwbum.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163nolanpnv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163iezqfpzm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163jmaamvwj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ojvvugam.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163chlnhnis.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163tmpeaydg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163diavsxdy.html

[C03] 可变参数
来源：http://www.sxryk.cn/163mtwwxksx.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163oxcoutxc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163jsqkmidy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ulvetcac.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163foqftbeu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163vrkobpjv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163whcivylw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163rsvzxxqa.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163pbwequub.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163nlraqfkw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163yliynosz.html


<!-- 参考信息 -->