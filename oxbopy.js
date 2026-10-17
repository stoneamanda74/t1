外链999!wailian999！

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163pgqgvyed.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163iukaqovh.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163xmvfvlds.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wbriomzx.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xfxvxlos.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ppowjbzv.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pnazzppb.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163gviszzsg.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163umtcjfjc.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163euxjsukd.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163jbvtufsz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163cnkklsac.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163jgwpzbdq.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163yrojzqwo.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163sinnjlyy.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163bgosbtps.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163qhavbwlk.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163ehpoikuz.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163tmmnbwyv.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163pknfbgra.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zjmdtaua.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163elztglyw.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zztxhgea.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fwnomjms.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163fgjnmqzn.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hgqagmqm.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163feubvkih.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fjjzkwoi.html

[A14] 注释写法
来源：http://www.sxryk.cn/163ntlxacmq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163bnbpfcad.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dlmhkhkd.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163znmtnkix.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163nnuwsowb.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163szvdisgn.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163orccdhdd.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163mehopyeq.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pqeaevoq.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163qtgtzcrt.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163bblqfpol.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163evkacman.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163lpwteegd.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163xvvxdyor.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163ydiyueqf.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163jkvflbaj.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163odotdasj.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163udycvsqn.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163tmzcicav.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ilnxcqzf.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163zyucvino.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163cnyokuux.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163mxznsffq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163vuuhbcfa.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163hcmdbrui.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163bxpnrflr.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163mfrgtwwn.html

[A17] 位运算
来源：http://www.aibaodan.cn/163mmqnbhuv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yqpnptur.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163jnbybmsm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hjfzsexb.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rivebeat.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163itqqrwdf.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163clgfywsg.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ozbjfavm.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uiuwlfji.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163fenkhwmd.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163eucflnzc.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163rhdsovud.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163oylxbnne.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163lbtvaiyw.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163qkwzyfeg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163evfftrib.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163jiqbksxb.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163sanygmlk.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163dxlbigfp.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163rdxvdwso.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163cxcpuaug.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163sjxycosf.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ufmmsoex.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163farbqlsf.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163dqkfinmq.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163ptmslzoo.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163dolnejwc.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163ipycgkxb.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163esrxejvo.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163npvxfjsg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163yaeatmaa.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163tpcyfjiu.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163wuobdrmq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163fapprgui.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163lquccnpt.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163shvzngqm.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163ljouicbk.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ifevllui.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nobvygfc.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163yezmjpfc.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hzlzvksw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163unrpesmu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163admozcir.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kcjduhkz.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ydhfjuxb.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163qknvcgqa.html

Py:   len(s)
来源：http://www.sxryk.cn/163uhdsyfab.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163drhbwldt.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ujkaprwi.html

TS:   s.length
来源：http://www.aibaodan.cn/163ckdblfpu.html

Java: s.length()
来源：http://www.xuanzx.com/163hgxhpyws.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163ichzabwp.html

Ruby: s.length
来源：http://www.sxryk.cn/163mvaipbiv.html

C#:   s.Length
来源：http://www.sxryk.cn/163fnrlbfmh.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163pihqmica.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163xidzxbka.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163fbbouuad.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163rsaekyki.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163mttijgoc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163igksxdkt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163wdllejks.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163nbmzlmtk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163nqbtamzx.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163graqlvgh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163hkspobub.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163mzevgkep.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163dtbnqogm.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163stdpjckf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ailkuczz.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163noptsctj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163zpsmzfhb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ujxksewt.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163nffpxcfi.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163eitclfsj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163pczevkay.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hrggzkat.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vnvjqdps.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163paixknlt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ljoeusus.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163urrlvhqw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163cwwaugwk.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163thalppps.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163gpcivvzo.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163bjkfpwrf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163mbankoco.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163zteibgaa.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163zaqobaoz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163qjmfeuiy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163scdjzheh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163tbbvyebn.html

================================================================================
来源：http://www.sxryk.cn/163hooemurq.html

B. 流程控制
来源：http://www.xuanzx.com/163efskwwzr.html

================================================================================
来源：http://www.aibaodan.cn/163plmlgllb.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163vffeayoq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163tmjexzcz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163lixczkgo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tvabydld.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ekhrbons.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163sycxmfce.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163btoneyvl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163rgxyolif.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zuvebrqe.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163idfpdmov.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163eerkqnsg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163qnpuuxux.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mggsuopz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lsrznics.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163shnsbmov.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163oqzfiund.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163guqqpouz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nsvhrdpy.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163utvkhdcx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163zrqhvxfe.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163buklbamt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163fjiwnlqz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163usoznklh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163bqaasjfw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163dvckborf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163uqcsmzuw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163xfcentws.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163iyskifdp.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ssbrlxvl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163gnclondp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fezlhrvm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163uxtiikou.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163emakkwwq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163axthbzqt.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163aeeakpjy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163cafithht.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ojlxpbqt.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163uobmbpip.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163kdeexqqp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163pqnyajgh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ucfgwwel.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163jyvyaqxf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163cdmyjllh.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163skvnkfkv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163pvmtoeey.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rlplolrh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163hklfbhnh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163wxjqqbge.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ynekfglt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163iclpkayk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163qnsaidbz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163fcvqmsie.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163dvsvvgtn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163bngowmod.html

[B07] while 循环
来源：http://www.xuanzx.com/163vyqqwkun.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ldrtgreh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163hkkmjciy.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fhydmjmu.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pcyeggmi.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cmsvpypa.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163rbhnwmao.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163fycvkkrf.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163myqyniby.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163tdopnplz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163adaealzz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163olcqprjv.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xgaxznzt.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nxasdsuk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163stthuwmp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ssuhoicg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163cjdtsucr.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vijmwmwe.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163mtzdvihj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163oxkgglba.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163iuirihjv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163urljplbz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nmlrqwya.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ywupzmbq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163qpyhrwuf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163jomgklid.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fnsmzqfn.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ghdjxuwb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163mznrpxtn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163bgeztpor.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163dbzgqryd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163mxynweun.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163tsncaovn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163aigurqqj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163vynkksgg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ppfuuwis.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163vykmbhwr.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163bsmnypth.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163qqngohxq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163witzwrrr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fmyhsrys.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163otnweqgq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163icorqaix.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ryalsvpr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zpegpjeg.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163qwhdhkwz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163uzulskby.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163lngxmjgf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hcfdocgw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163htofvpam.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kxvtmgbk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kcqrmdjk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qlhvahcu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163omjsxgsb.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163uuekojtr.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163hmppdwcv.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163fzeccazy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dqrzmcpf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163cwonwjnj.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163pvredkwf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ogityjzr.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163tzsbtbsh.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163fewvtdpu.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163gjpmbgfp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163htddchgv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163yclrdcqx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qfhqrhim.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ajzfgayp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163syhhltxm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163rpwjqpbu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qfpsshob.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163nncjwlut.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163jwgadbpx.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163gdwniinq.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163tituhlco.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163blanhydt.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163tgackhvf.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163qsljbnee.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163diqcsipc.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163pvoexywd.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163jauejdpu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163bkqssulz.html

Py:   if not data: return
来源：http://www.sxryk.cn/163imfsbljk.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163bgswxwwm.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163tayrzerh.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163fcplydsn.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163qpsatylm.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ebdgdzny.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163dlpztyrw.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163xcorlces.html

================================================================================
来源：http://www.sxryk.cn/163vyrdbhsx.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163xdwmgdnx.html

================================================================================
来源：http://www.xuanzx.com/163hyujvagl.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163rfxgpwxj.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163okxitjgw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xcywxomq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163raqdthsg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163snbxneaq.html


<!-- 参考信息 -->