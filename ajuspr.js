外链999!wailian999！

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163ppgvmgvl.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163htamqtnv.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163hybluxuo.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163kfbplwrg.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163fojwyzrm.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163yqnxagku.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163smwiucsg.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163eoptgjjd.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163edpvpybd.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163hzhdcalc.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zsiqxwrr.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cptzlccp.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163jmmjsssc.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rrrijohp.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163qmshucpc.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mhosheko.html

[A14] 注释写法
来源：http://www.sxryk.cn/163aokhwsda.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163abdhqwep.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163atcwsszq.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tkgdvgfz.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163evilkirs.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163geepheki.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vubfauuu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163hriplbhe.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163rvtergxe.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163urzvccuk.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163tdswzmmr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163rjvzssuh.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163dhvtiyct.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163cdmfewmj.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163amoxcakh.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163vqodvmxt.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163rszihdls.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163skvlpkap.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163exdndfcy.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163dctjryyg.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163wvqjcweo.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163vttqswgd.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163yddxdvox.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163qrldbpec.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ucsqjnzu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163iqavvzxc.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163utryqvhp.html

[A17] 位运算
来源：http://www.aibaodan.cn/163csisqppb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zluzapnp.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163ywznpbui.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163miamnagg.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tirsasoe.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163helxkxht.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ngzmdcdl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tfhuqtlp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zczundum.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163lpbailfh.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163qkqxzkll.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163kccbsong.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ofcobkzx.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ahulnwtq.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163rpdyrasb.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163rlpcrunp.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163ydfqliyo.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ledodvor.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ninnlytj.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163ucdwgjgv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163mbqubeuq.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163kmecoque.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ifbjtsnk.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163wfzyvzxp.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163bviqhngn.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163qnmofrzq.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163wmcvjbmq.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163oinnrtta.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163oaghvvvc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163gpuhsnav.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163cryquvns.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163dotbsxto.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163zvuupieo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163mejhycub.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163plohhffu.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163mnkhjljb.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163iyogsuwa.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163girshzsg.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qmevuvud.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163zxvrrsvv.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163gafijgye.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qsqgkkbv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rwwbkjeb.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163sjrmutqg.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163jibndbyj.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163gzxvpmjg.html

Py:   len(s)
来源：http://www.sxryk.cn/163diasktbv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163olbefasj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163wyrivatd.html

TS:   s.length
来源：http://www.xuanzx.com/163bkyojtrv.html

Java: s.length()
来源：http://www.aibaodan.cn/163dtazwylk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163noyzgsqq.html

Ruby: s.length
来源：http://www.sxryk.cn/163uvkbkzqj.html

C#:   s.Length
来源：http://www.sxryk.cn/163ziplzlls.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163xkonmltv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163nzkwnvep.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163dzktgjke.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uqfhtmts.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163bmkhmwrz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qfnnmiek.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163jrtplqko.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163nulxrrau.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163gdkhaers.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163cdmiqtye.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163writofox.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163kwysvcob.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ygcuvanp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163nbzpmbnn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163bbzsiaar.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ngyriyup.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ptdwiwjb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163phuwjmmi.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163vppxnhse.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163pasucuso.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163swpytwev.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163dypdmakx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163wfrieyvn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163wphwdbtx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163avciypse.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163dhxirqiw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163zimgiwmp.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163jpmghdoc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163vmgbdmgm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163jxzfhstc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163nskrujdt.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163yvfiekub.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ybdqiblm.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163xfupwlln.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163bxqflalh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163kisnnejt.html

================================================================================
来源：http://www.sxryk.cn/163jppqhkww.html

B. 流程控制
来源：http://www.sxryk.cn/163zancnyah.html

================================================================================
来源：http://www.aibaodan.cn/163oyysldhr.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ldubaylr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163dtxglubc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163rvwmtvxw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rhdavxmw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kqdfqcyz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tgtquegj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163xtcxnxxm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163peghmkkz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163eunsoxnq.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163pvxqfnhx.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163okxzwtdt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163mektmhqx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163leshvztq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163edtvaydp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lozcqhso.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163tfzxhbys.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163adunhyul.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163oxzeukdw.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163naroztvy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163clkiesya.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163kcqmhzyj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dclitghz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kocxciao.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ktlrmeij.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163acecedbp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163mjypeaoy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163rsfqkhwq.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163sxtoxiti.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163tijimxpg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163gjuydxob.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163yctvojbk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163jtywclgz.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163cidzdvgs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163lnrrvkik.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ukahdslg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163faywfmjm.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163zhvbowmq.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163mxdgcpwg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163ewukxefp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qqubhwlo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163alwerxkr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163gobtlnqa.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163mahhwyfg.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163tpcqqsus.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163lwvzlobg.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163odiwzqvp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163uwadyjbs.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163dsippwvd.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wetsvdcm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bidsznsl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163twtcfkbx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163icondkih.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163jcgmklqk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163wdzmkgjb.html

[B07] while 循环
来源：http://www.sxryk.cn/163iyentwml.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163xvvqgdif.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163clnxqbpa.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163agqnopsw.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wnzqkrzq.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163keipncka.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163hsfqgfsr.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163cslwdweb.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tsmldaxj.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163gpfcdtxt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163eygkbxdc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163zmetgnrf.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163axbkhmos.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vyaiertv.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cjeuxkqp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163iamdltxo.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163vuwvbnqp.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ozighcoy.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163mutfpxzq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163dbmxzsxx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163dbfccfzv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ossidboj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ekfbxqdk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qjfcxgfy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163fxgjlkev.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163qlhwporx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xhotmhgu.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163rwnebmvs.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163tphnlchj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163upyhfxvo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163iegzwhux.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qzytwwxl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163tpefuomu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163vfffylua.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163sxzlxsmw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163nkbqyvwk.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hyjdftmm.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163uwnglwqv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163kjpjmibz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ptqgwrad.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dyakpmyw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163vzqppfgo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163riwvjmyt.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163kxajlway.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fneoliix.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163agbpbmpb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163xlstocma.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163prdgrxxt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vikfttpe.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fkiinoft.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uhlzvsxv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ujuksfek.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163lrqqzoqm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163moqpjytl.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163kqsfcked.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163zozwrnxp.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163dcfknxad.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163tjwjcogv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vnlyrcaq.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163vepperso.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163cxgrrsrp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163mrdrhrdf.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qjqgglwi.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163glondeck.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163oktckvxb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163pwpbpdbb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163heqyciwq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dntdmvjb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163baarzyvk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xudtsoja.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163dcdrygal.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163jrvmaggv.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163awrnjkkn.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163tgbaxfpp.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kffqfbor.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163htshifxg.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163avwhctwc.html

Java: a && b || !c
来源：http://www.xuanzx.com/163myxihxxb.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163chxzpste.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163vfsiqedw.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163kiqfphuw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ohncyllc.html

Py:   if not data: return
来源：http://www.xuanzx.com/163trlcwdzn.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163zkxfkioy.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163dpoqciyc.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163beslibni.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163urjesbnh.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163odyzlfmp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163tfmflrhl.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163aiygfirm.html

================================================================================
来源：http://www.xuanzx.com/163qmyjwxbo.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163lecetdpn.html

================================================================================
来源：http://www.xuanzx.com/163ynrvugkm.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ikoxisyb.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163irvalsxa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lgeglwmv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ibdjardk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mzukgihh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vxcjbxyz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163cteocliu.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163xivpbhca.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nepjkhxs.html

[C02] 默认参数
来源：http://www.xuanzx.com/163tsjalqat.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163mgmpjnhu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ffpamulq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163rgkurxpq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163csmfmqqj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ehkcswmf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wraobuvy.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163iqrwukgl.html


<!-- 参考信息 -->