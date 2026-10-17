外链999!wailian999！

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163sadcbwyq.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163oweirfrh.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163eznujjjp.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yavylfhr.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163holkdmip.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qapfeskh.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tvnaekaq.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163zlloudcs.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bkdbekmi.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163swxxjlek.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163iimodowv.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163onvkqwyp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163nulfiyyv.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163rkzqevte.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163vsphmbrz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163pheguouv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163fbnhbxcs.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163hwfazrsh.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163zsytntgy.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163spnxmbyf.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mysfjxzt.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163ceowheht.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fwxibisn.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pdcizbfn.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163oxgodxsa.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ahzbrgfh.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163nnmadbje.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163owgbxnzf.html

[A14] 注释写法
来源：http://www.sxryk.cn/163hrnywvlf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163eqjfkdxc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ypdrvpjq.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hyvcpvjh.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163llymolsp.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ybkyjsct.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gtuassmv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163pkvgkmlj.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rjkwomuo.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163pdxkrswb.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163kghmkccv.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163jfjaamra.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163wjbvcwzp.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163zhfegrcj.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163rqzmysbi.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163sxrikfpr.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163ogznyezy.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163dcdyvpjv.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163chxunetw.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163yxpklkwr.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163wyhnrgbo.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163bxsawtsz.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163hvzbrxwl.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ebqgswyp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163zjmpdwhd.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163zavktvud.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163pqdufqpc.html

[A17] 位运算
来源：http://www.aibaodan.cn/163yolwmkkh.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qxpakika.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163mkfhnhxp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163awlndcpn.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163wqjypvhh.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zkjcewob.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uanopzcy.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ndnaktge.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ybkpcxfq.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163vuwlhzwx.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163zmmwjfwn.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163npotkuks.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163wnlljhir.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163niqzvgij.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163zjhqufen.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163gnclkddc.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163ztpnoblg.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163cjeppcbr.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ezntkxro.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163gntsfhyg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ailkuyiw.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163vmcukjiw.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ouxspeeu.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163vrfndkyp.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163bknblwvp.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163wqclswnx.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163wjqtggdv.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163gluzanmf.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163uqcofnxj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163mwrwspag.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163okvjhemm.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163evenggcg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163costdotw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163sgrysith.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163fqchaxwj.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163mmqqrzwe.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163uctkoryw.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163etpseurg.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kxaivjaf.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163vcrmdnss.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ivvgpyca.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163roqbswcs.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nbtsbrrg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163lxtfjdbs.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163tgbmqxzh.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163fuqmkriq.html

Py:   len(s)
来源：http://www.aibaodan.cn/163qcyzwlkf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163tjmeeuro.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163jcncudnh.html

TS:   s.length
来源：http://www.xuanzx.com/163zsguqlij.html

Java: s.length()
来源：http://www.sxryk.cn/163ujitjnaw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ukfcmndn.html

Ruby: s.length
来源：http://www.sxryk.cn/163zbpyufrx.html

C#:   s.Length
来源：http://www.sxryk.cn/163drpjuzkd.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163jowonvlp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163yzrbsysk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163gxajshem.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ilvtafqv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xfbcoewm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mjflzsst.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163abwctdje.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ahpiyrgd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163quvqaoip.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163pfqjskpy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163htpljjbv.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163kymbqwox.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vswhkjqn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xduonqen.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163nnvldcpu.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163leeizmkl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163wjueoknc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163yusxevcn.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163utpfcgsy.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163egwbdptr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163exsnvxzn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163fzurznrx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xtojeqvd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163nyebzedc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ynbjcnvw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163xvswpnbc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163uvmpayzh.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163wnrsgekg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ykhgzqmq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163gufzqcvg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163arqcetkf.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163btjwtzvh.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163kaqyjorb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163tutamxkg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163nwkuowhw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163zctrtiqe.html

================================================================================
来源：http://www.aibaodan.cn/163yqmurxfj.html

B. 流程控制
来源：http://www.xuanzx.com/163lwghxnmv.html

================================================================================
来源：http://www.aibaodan.cn/163teuyudba.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163nraoowin.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163jnjmenbk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163bwgbwdyk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tjtzyaiw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163szaiddsl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163oobqxwuv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ohghtgev.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163wxnmnmwt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163leisbvvm.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ubwsnthr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163gnnosxtu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163dsdysmvy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yuwiatxv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wztxvhot.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cpxdmuyo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163drjncidm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163tprgkwlz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tpkfiplk.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163fyfktlaa.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163xczotpda.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ietbtztb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ojksmirm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163xivqmnjr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ycwiveca.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163tarqicel.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163kbrneueo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163schyjatg.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163kvczufhl.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163qonslzix.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163iljpeqnv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cnhdeaos.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163qadjrcfu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163sqoihoru.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163brqieqro.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163tzizvrya.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163gbsetvha.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ldsiqztl.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163rxvnoqms.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163fgqyojma.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163kbuvjgno.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163sirznlfo.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163hhysijok.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163upvmslid.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hmdwgatx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163mmaabkba.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163pptjhjfa.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163zgkbmrvw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163lunxndev.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wqmhkqqd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bytvhvei.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ecrxiemp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163qxynxoiv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163derngzbm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163dgljtlra.html

[B07] while 循环
来源：http://www.xuanzx.com/163pspkztlh.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163yyumhkuv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163arnyfbwq.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163eiwilmzb.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yqqqtrkh.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xilmhdsl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163spcnbypp.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163lpuibzwi.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163skwgrvoy.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ysyruuik.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163rhojuctd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wvrvkqqs.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yydcxmhy.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tljplkpa.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qgfxphfl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163syemfcgm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163eojzsbbj.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mjuqlcsj.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163viihrils.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163cmawcctc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163uiouxinz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163aagapzou.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eargtoor.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bhfinxgh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163lhyyvpeg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163qydkzdbb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163islpcfjj.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163dquexocf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163tctodqdb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163uljyfsvc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163mpplatcl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163wwwkeazk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163axtanvml.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ucmxcjws.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163llbrqyhn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163jfcedwus.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163iodsyhnt.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fkpvaurb.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163vbgqxldq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mduriofi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ubrhydlj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163mpjqdeqn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163bnbqlhaw.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163bpvohfvn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163uxkitblj.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163fpskgcxc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163pylazuzg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163crodeklq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vmfhiola.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tmxphayh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mtuhnyra.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163hzhnnbqo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163lvkaykzg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163rpogwlow.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163yhuemmyl.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163dipjhthd.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163aaxbfwvx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jvqvzpdn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163sctkpqhn.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tcqaelmg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163tejfvzzx.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163xmfmcwgz.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163rampkply.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rgjpxftt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163eodujihj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163iwygbhuj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ktkjuvuq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dtitpnbt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fboiytux.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vurvyajm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163isbahgla.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163rvbhxpsp.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163zswwtlzu.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jlzopxse.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163opyoeybi.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163zpynbyme.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163cawjbvmd.html

Java: a && b || !c
来源：http://www.sxryk.cn/163duzzbplg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ihbgzkci.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163gpgphvdc.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163lqzovhza.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qtqqikfe.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ytdpjgvg.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163imzkwvke.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163jjobfmqk.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163odzzawbn.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ywymheha.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163pijfgwau.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163pmrujbjn.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163vjukzupi.html

================================================================================
来源：http://www.aibaodan.cn/163zxjmycbk.html

C. 函数与作用域
来源：http://www.sxryk.cn/163lljppnqq.html

================================================================================
来源：http://www.xuanzx.com/163uloriwnp.html

[C01] 定义函数
来源：http://www.xuanzx.com/163fnvfhpru.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163vwsvfbgf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vokttrfz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xbsumobb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163vmnmsjiw.html


<!-- 参考信息 -->