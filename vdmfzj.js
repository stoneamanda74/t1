外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163rvpwigmo.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163zainszjg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163hliimirh.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163joulopef.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163qbhdvyqw.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163vwoatekx.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163btjaohqb.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163egextery.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163fcthtlmj.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163akfsrapv.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qjrtpctw.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163akazmkli.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tffzhltu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bdyedhyy.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163bcthpsun.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163tubejztp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163eaflqcsw.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163tetpcflf.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163vquxavuk.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163qtthplnv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163qiimxprv.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163eyonpsig.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163bsrlyfgm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163uzvtffdb.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qwjddvjj.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163mpzgaimc.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163feqcopgr.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ksbbnszk.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163fndhbowy.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fygsyzhp.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163shafxqhu.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dgggxtvl.html

[A14] 注释写法
来源：http://www.sxryk.cn/163rjnfadmt.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163qhlgesxb.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163zkrtbqad.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nygmvixk.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wuhdgdgp.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163dbchltux.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163taojpggz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163qgqnncpe.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jgvnxzjj.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163hbrlqmod.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163jsvittlq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163nobtroyw.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163clvaqsmj.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ymoavojc.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163kmjsmutv.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163qtyvxocq.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163oezmtqvs.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163rbgrdxjc.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163uezkixcp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163mstpgjgl.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163yaoulavd.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163rmlpeuxp.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163tbpjjjbk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163tsxrtluu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163yerbjksz.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163ztcilnez.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163uqfixdtz.html

[A17] 位运算
来源：http://www.aibaodan.cn/163nbizjeec.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pmltzibs.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163rpungpey.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tynhbhvh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wbuizfvs.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xjysxwca.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jrlxcjpy.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vsgrtugx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vdsodwcv.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163ssapbsux.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163diwvsmrx.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163moaponcp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163pkqspdir.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163bxoklajm.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163uucijswk.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163whzsvgec.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163zgpzngkv.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163kolslang.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163adntzmpw.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163ncwtnmwg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163cayzajta.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163yprefjhc.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163spcxdidc.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163vrfreyhc.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163hrkgspjd.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163egjuicmr.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163gegopjlf.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163netimcud.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163jnxrpzmu.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163fqgwetfc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163afabdxnm.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163llcebbql.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163rsgwgepk.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163dmgwegtf.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163eijlcquh.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163aoggqxvk.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163dhegckwo.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163uvjhkqta.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vvpjzbah.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163jqlignhw.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163xivcmrtw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163czrtaese.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vsltgzie.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xdfcfvwt.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163aarficne.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163pqejqpou.html

Py:   len(s)
来源：http://www.sxryk.cn/163xauxkhfa.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163jjuwrrtg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163nkbvzhue.html

TS:   s.length
来源：http://www.xuanzx.com/163orjwhnuo.html

Java: s.length()
来源：http://www.aibaodan.cn/163fsmwdfjz.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163gdlupsws.html

Ruby: s.length
来源：http://www.aibaodan.cn/163vthmnlms.html

C#:   s.Length
来源：http://www.sxryk.cn/163hkemftgk.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163jidmynem.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163beketqib.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ndgrjvkg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ilukveve.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163amguxgfi.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rftsxssb.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ilwsklkj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ponnsnvs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163txhjjkce.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163ercpkikm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163bhomhbhn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163lcirsvvi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ldsnjjmv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163qvptdwov.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163geubsbbr.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163jkfukgyt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163xpzhqbzi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163lnfbxmfy.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163wnscvjyj.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163enofaelv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163msrvjftj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163neiyyhli.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ozlhjdac.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163woqyjnoo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163dwpfejgm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163lhowfhhl.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vyapqrij.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163nxilfuak.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163wemuipxn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163myktfvwr.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163sdvajvsr.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163mumtiqaf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163zypnfdjx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163jjnsgkvj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163iiptdgwe.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163htsnmqww.html

================================================================================
来源：http://www.xuanzx.com/163tlpnhykf.html

B. 流程控制
来源：http://www.sxryk.cn/163nfyzgwsm.html

================================================================================
来源：http://www.xuanzx.com/163nlhrhktz.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ghnqjahp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163vfvqerac.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163eazmpkdj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mlmbgbbr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wzohaesl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tjvszeef.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163xyupzbfi.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163mmsdwhjw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hofnaimc.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163flddnjna.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163uoemzszk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163wavbswzb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uclicrlk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hdwrjkax.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uzhwhizx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163bltqroqs.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163vkjbzwyh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kyqlkzyz.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163vipizanv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163gsklnnbi.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163zuibhbin.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jmkkiydy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163kpxlekqk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163cxcjxtgt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163chukediz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163yvaijzhj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163xzhmvtjx.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163nqbihjop.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163vxejsfjy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163othfcnwt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cvhhsxcw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jyrsczcs.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163yccdzgps.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ntriwpng.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ptbqtllq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163pjpqcrrc.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163hejipvxn.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163knwagoug.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163lfnvgowr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163maukprkj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163njocguzj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ivxbtwpq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163gyevcnog.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163fufgvcda.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163zsmcagyh.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ifoszfce.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163lpeooybv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163umprbqda.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163uprovuhf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ffnqyuhr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163alybmbnj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163otqltxmf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163nuvfxslp.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163fnpyowxb.html

[B07] while 循环
来源：http://www.sxryk.cn/163omxxcfnj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163sxxcouup.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163eqmubzhx.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xuylzmhz.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rtnkceza.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163aqowqnep.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163hidgpkmg.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163japamldb.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qmdidstd.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163bwcqwzdf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163qunkyfxg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163gqhtyjlv.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fsllvydt.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163thoulrvy.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yoppxnqt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163bjmywzhw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163qqjbfzfm.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163naayejmy.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163uwbvdhvl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163awczlyav.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ehwycyck.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163iqayztgu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tjlapagg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163twztbewx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163hhowsigu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163vfkzovcw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ttkwnqry.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163gdnchtrp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163zppvkhic.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163itflxoaf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163lcwztodo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ppgyzxvu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163vgnraskp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163tbktsjmy.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163yximokic.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163npttycll.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163gedbygup.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163sqczgepq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163lxcsdtlf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163tmmwuhwb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mygvudbp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163cnudyzcs.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163cabxsabv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163qhngexuh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163oarjwpie.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163mojsmkmn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163koqscgdc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163pzpvjdms.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163csajxkmi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dmujnlyh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yinfiwev.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163zbooohln.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163cbpyqvcf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wswwijlf.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163uqjvctxn.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ovduhlts.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ezzrmzva.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kvscpgwx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163khszrcuy.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163cgippbmm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163tkmcmbpx.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163igneybjq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163eqgwwmng.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163iwertjqj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163nalonrow.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163asvqxfqe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163megdznlr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163swebdabn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163rmxztruo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163uvowirtv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163lcdtjesa.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163htyozztg.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ucgjywip.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163bqpbxbsy.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ntulsjph.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163gvqvfqzr.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163vumwnutc.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ccabwius.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163bgctoszt.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163bdrbcqxw.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mxpfmhyn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163uvgkwaes.html

Py:   if not data: return
来源：http://www.xuanzx.com/163wgrxjnbp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163vlnonool.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163qdrweqvg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163xodiujty.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163arfxedwf.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163pgvmxysk.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163kwiqzitn.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ujqsyxun.html

================================================================================
来源：http://www.aibaodan.cn/163eepienwh.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qqchjxdm.html

================================================================================
来源：http://www.aibaodan.cn/163qysrtoae.html

[C01] 定义函数
来源：http://www.sxryk.cn/163sdxrbevb.html


<!-- 参考信息 -->