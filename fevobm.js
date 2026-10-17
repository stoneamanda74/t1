外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163dydpftfl.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163pamjfyso.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163sdpnrjnq.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163rdrvpepd.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163obkiljgr.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163sopepiby.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163yxwzhzbs.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yuopieqy.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wyyvoaik.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xeqwbrpp.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hhzezlbe.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163awdvoixb.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hzdhuilg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163oohnljqk.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163cgenoynb.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163vllwudpc.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163xvsqhlwu.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163omyqgurl.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163mxilgleo.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163qlgyjhkc.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163yoradzkl.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163ssqhdslk.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ksuqkblx.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163tqtztnmg.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mchmnpwn.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163nsaxdejh.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xvdxntsw.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163evhczipg.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163xmltbhln.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mgjzzdau.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163hzqswsqe.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nxznhosg.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163mrfnfjwj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163rarlgdnx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163gbxnbuuw.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vdianfuv.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vlzpkenh.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163kuaoulkr.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pgngzfbv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163qsgzdozd.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163cxrzinck.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163ilxndxwz.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163gkdfplxd.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163qtpxreen.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163egkduobl.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163zkvmjypf.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163smcclksl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163bmhobloa.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163zyugofoz.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163cdsbinnw.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163xrlqkcoh.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163vknynhwj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163zzyyvnvc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163dsconihi.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163qxfhuatn.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163lnbciyfn.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163gtwoeaym.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163txymzboj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163namegitj.html

[A17] 位运算
来源：http://www.aibaodan.cn/163lozqgudw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163aktmsjzc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163uzmigqls.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163atyoclpm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mednfogx.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qdvbnaco.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xtkzvnkn.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cqmykkgw.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163toopoqup.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163elsiicld.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xckyluua.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163ydfiahfk.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163yyaksfec.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163gbpeitdr.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163kfdpjwlb.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163mtgcofyb.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163bdeofjkz.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163lvnubfrh.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163uckcljde.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163xvlenabu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163uqynblbi.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163rviskmjs.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163jflxxqqs.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163txcxwxfn.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163rduhqeeh.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163sbyydant.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163uzkstzfo.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163piweajzj.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163qilthkya.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163zicawgup.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163ayxyngvq.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163lofgjqcu.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163twikfojv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163tapivnns.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163tqsmyhpk.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163nprwzetu.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163qfnogbny.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163wbzsqnom.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163uvrkafhb.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163zepsbrfk.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hgjubygs.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ytahweya.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163uttjwyxh.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ittjqkoj.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163tsayubgm.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163qnvfuoof.html

Py:   len(s)
来源：http://www.aibaodan.cn/163jmiwigut.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163irxbgaxl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163jyxfpzde.html

TS:   s.length
来源：http://www.xuanzx.com/163sngsbarc.html

Java: s.length()
来源：http://www.aibaodan.cn/163yhxalskp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163fpiryhis.html

Ruby: s.length
来源：http://www.xuanzx.com/163spkmnyck.html

C#:   s.Length
来源：http://www.sxryk.cn/163paeocouo.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163zmjtadiw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163axcsihxl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163deeredzo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163eznrmlkf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kdouanuo.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ldmapjxd.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163mnhouwsw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163epqnumjl.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163oznlttiy.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163obictuqq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163qogwqotc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163trhoegzn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ayyfrymr.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qmntyigh.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163wllqukiz.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163rovahogf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163qancyjva.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163fsogcyju.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163hcdgbkms.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163bjfibstu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163ttbqxpuu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163jkonbcdw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vyblsfaq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163tahckcdj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163nfyutmcf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163hhpeudvp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163tqvzogdi.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163hdcmcnpa.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163ocdjvyub.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163siowzgec.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163izcwyeby.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163jlrmyxkt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163zltkedxa.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163kyspzosq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163vqdkuqyt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163fszsbhle.html

================================================================================
来源：http://www.xuanzx.com/163pbjrfvvw.html

B. 流程控制
来源：http://www.sxryk.cn/163dzbwosbz.html

================================================================================
来源：http://www.aibaodan.cn/163neznryba.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ghzogamq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163hyadxaoh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163euevqjmo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xektuogb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tdoxicrv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tytsbsck.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163muhwbpds.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163cbhlxtgy.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163woiwqquv.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163pgioqmmb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163hkkruzgy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163rgoniupo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163msbmqkkm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gqnmmfqr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hhtnzefw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163vsrfahfw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163erwqxyht.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163shfalanm.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163cwkroiov.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163dlfsrpjg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163kwbdzdyy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wprbjzsb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ktbcrshx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163rnhvreqz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163twztxdrp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163udgprsvj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163lluutrks.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163cfscoisy.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ybztmkoz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163jvmowfvk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163gtkuebmx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gfmiwlzv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163byktzecc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163nvbntlew.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163npzqizpm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163qqxsmxiv.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163qnwfyhpq.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163diadzruh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163rjiinmfm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vykrvzpw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pyjvwtrg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163bgtjvqty.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163dtxyvoxj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163jkyviuni.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163mjxgooof.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rcqlhwvi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163bnekklfi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ywuvqiuw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dueejxvh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qqgcbdeq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ccdpoijs.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ikflvkzn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163rgaivfey.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163epdfflvz.html

[B07] while 循环
来源：http://www.sxryk.cn/163kyojlesw.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163acortcsu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163wawtirdc.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ewsrtpql.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rxbvefta.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163plkmhgap.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163maaeueyp.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163fexlljoc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zdeiqlxf.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163zcplryvx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163dkittngg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163lbaguoxq.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163thtxttkw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vhlbxwjx.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ypkatdrn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jzsbjxmd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163syqlkgdk.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ngcmprbv.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163cygdjhyr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163hgaqvdkk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163figehppc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nkyxymyi.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cccoeooe.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gawkdwaz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163vnxfdopg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163vjerlkbu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rghzvxgy.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163jokpcxap.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163awtxdstp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ihxpjfoc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163gqrtoahh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163gyggbqyx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163dpymhrjr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163mduuydxh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163fittmyhr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163egnvhxxz.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ohgfcjjh.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163kisufcpv.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163jqhtizqd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wjgaftfx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163chkbthrz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163opecppyl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163hlcjbddt.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163wghvlrkh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163grlhigfl.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163vheqeejo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163aewobezt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163izuwxooq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hswdbduv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163efpmzxsh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hwhdpwwr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ticpdisv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163maupeqvb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163oanxhflu.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163wbiqegpa.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163zrwuhxbg.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163fwrlyovn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163alhcqovc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zptbfyzh.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163geloyqlj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163jrqjficz.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jvxipzwo.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163jhzxnivt.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163vobmigzb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163jnboltgz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163luzaeiga.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pvbzgapy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163uovksvsq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163tkacsxxm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163jdtzbfbj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163jlzwvrgc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vkpberms.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163mszvjziv.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163qolzejvg.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163aoypebgg.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163fverrraw.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163upsrbyje.html

Java: a && b || !c
来源：http://www.sxryk.cn/163qtauuszl.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ttyoebjy.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163kfxnecyn.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163kcgierzi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lsehsnie.html

Py:   if not data: return
来源：http://www.sxryk.cn/163dnfozpwa.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163jmdgyrsx.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163verecwjz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qxvjopdj.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163damgnzfu.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163yqgabzxv.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163exdrkpan.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163betbhkxp.html

================================================================================
来源：http://www.sxryk.cn/163ryucumsm.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163pvfzpzhv.html

================================================================================
来源：http://www.xuanzx.com/163tdxkxutk.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163nnxnuknx.html


<!-- 参考信息 -->