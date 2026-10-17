外链999!wailian999！

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163lhzgtxmb.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163syjbwqpi.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163qjxucvgt.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ioojwupp.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hjiloezu.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163oklyjqgd.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pbqvpbjt.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163zhwpkorx.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163aimarmjl.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pjtkemni.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163niwxkyhw.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163yoknpivm.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163tpojgpnx.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163vizzxhxw.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163bqcfnpdb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ilsjpdmu.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163vgpattqy.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163cfeqvyeg.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163egirdhbe.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163mofzdxhe.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rtnuscqc.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163pzixegjn.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163pkrbbnrz.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wvxeqzxr.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163zryptoxy.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tlqbjlmn.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163chnaqpvm.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163plyvlgot.html

[A14] 注释写法
来源：http://www.xuanzx.com/163goteqyyi.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163msrxeydf.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ermdlxmt.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ykvldadj.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163uasznfyo.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163aziwovzo.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163iciecyeu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163qlkumubm.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zefczdxn.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163boyspmoi.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163aklbbnod.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163dghevfib.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163mguaspol.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163adegggmo.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163yjpxrjlc.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163jfmbhtrt.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163bfacbkxy.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163xdrottfy.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163ccxnyrfj.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163trqpsleb.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163wywjxekg.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163oncwviaz.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163sdcepcnp.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163bcpgugos.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163qcsdwatp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163gabjhrta.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163mffnqouj.html

[A17] 位运算
来源：http://www.aibaodan.cn/163dtwlwbvf.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mmekbsqf.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163lhqlogny.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163aedhhsse.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oppnolak.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rnomvotr.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163eczlstya.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ujptfbbw.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163inyawanj.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163svnjlvdz.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163kegoplnb.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163zyxnrbel.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163leemskgk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163rxouytkk.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163rcdqists.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163dehkgewk.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163apkulpzh.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163yvqstcrd.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163pdycrghs.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163qfzvgfxg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163aithqckq.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163zghyhnae.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163jvmizgvq.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163efcoenhl.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163xyxuhxbo.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163kayngsjw.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163mqcsggji.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163qjjswqck.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163zrzptfhj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163pvkyfedm.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163cukovsfx.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163dcyeeftt.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163hxyiyjfi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163qerwtrsi.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163wjozpukv.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163phdvicxm.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163vxudtvse.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163fkeatdbw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qyunkcyr.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163xqzmguvg.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163tteacbbf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rjlffkoc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rulpeyjk.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tqkohyxw.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163pwymwycx.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163wgposybn.html

Py:   len(s)
来源：http://www.sxryk.cn/163kplopyhr.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163hfcgubyz.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163qdqjvcxk.html

TS:   s.length
来源：http://www.xuanzx.com/163qrzqtlxe.html

Java: s.length()
来源：http://www.aibaodan.cn/163zcinjlqy.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163mqhpthvm.html

Ruby: s.length
来源：http://www.xuanzx.com/163zfyggbvf.html

C#:   s.Length
来源：http://www.xuanzx.com/163qcegdxvq.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163hxzekzfg.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163yqrzolfj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163vrmakcrd.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163hirehufk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163isztorgj.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163klmwsayz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163kccjeegk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ivufmtgc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ilvuiize.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163qngofrce.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163gaxcwjfr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ehblaqql.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163uiooeyyx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163aqlpxbkj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163seweueiv.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163amnjndgs.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ssejkguv.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163pytrtbya.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163xzlfancg.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163adrmtrcr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163hgcpwkuq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163jqisiuub.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tctadfcn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ocwveizn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163gfuqupdf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163lstnqmae.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rfrbkhuo.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163zqjpwbsj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163wmfqckbo.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163tewsbmsl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163btezvern.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163virpwcft.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163falkpfeq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163lfoijkgz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163umnbfltl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163qutjdtbo.html

================================================================================
来源：http://www.sxryk.cn/163nvbzwxyv.html

B. 流程控制
来源：http://www.sxryk.cn/163bkzltryh.html

================================================================================
来源：http://www.sxryk.cn/163rlvdwuax.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163tqcfaubj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163fsbygrxg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163yuxfrysd.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kamjjbke.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zupmqbev.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ofyqteek.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163pufbcpda.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163eawmtito.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cisxxulr.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163yepsmibw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ckfbafrq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163mmfvkoca.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qoufjvkj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163segatvou.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rglwnyti.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163utrsiqwx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163rfdlmvcp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163oqxkvlof.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163qraixnid.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163vftxemar.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163qoayuatn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ggxrqayl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dwwhbsdv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163glltbxby.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163hoozyhme.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163zgwoqeqx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163xgmodqrq.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163wcazgtrq.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163chveuywg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163iebwjlyb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163efpqfjdj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ljwgtrjn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163jjrnhibq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163kzndtbbb.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163drunagzt.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163qmfpoind.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163rnfoefiv.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ajtxgatx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163cpndeuvf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163gvgqvwrh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lgzxavhn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ktvtvcsc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163bkjovhxw.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163nccvpnpc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163uiznuymc.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ijsinezo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163qkiuclsm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163lwvhcapp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wlqvsbib.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kfqoyljs.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163kjbwxsmk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163tnmtivun.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163zaepqplo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163drinjpmm.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jjrvcsrr.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163wdqudwhg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163vzvowxnk.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lqnphwjy.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163sulthunc.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oiucjsgs.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163eczgwcgs.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163kvjtdegl.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163iqcqnvns.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163gfkkrvxy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163vpdlkyml.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163uvnrtxgs.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163epnzbrvy.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yqbllqhn.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rzfaahbd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ngjeqbaa.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163bfvsbivp.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xpafgomu.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163evblfrkm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163nuvklalh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163sicyyzzr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gfluxsiu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163odueuogr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wqexfcrm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163uqlvvnah.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163dmaiavmi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uekpyytn.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163krgneopy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163chtkeiqq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163yqosfmpn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163oxixisaj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163epxmnxsw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ziwqvuzj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163guetdmpt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163rihvsjry.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163wysxygwt.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ydjldmtd.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163xwrxdnnb.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163bxonrnks.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163onabtruu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163czalyyzh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163fnpjyspf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163rrsipwav.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163poorylhv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163opdgnrpr.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163slaoakti.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163bskcuokp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163tkxitwxz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ixuzkdsx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163uudhilhz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vedpeqee.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163raemncdv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163qqifwxfn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163gphppzbu.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163rkpxgnil.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163hnflyaks.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163muujlcri.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lrwsetdf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163roqxreth.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163pwrrxmbm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ucnlinne.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163hqhbvquq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163kueekqls.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ktazmvfo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163rtikddmk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163lqefmshh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nzpmbnaw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bychnukm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ohmcdnfp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hhfzstwb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163dalwzqoq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ckhjtfww.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ampwtdwi.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163fjwrmqip.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163rfsrhxsu.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ghqjtmoz.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163awlwdxjq.html

Java: a && b || !c
来源：http://www.xuanzx.com/163cxhxymia.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163wosmfocl.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163jxmastld.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ngncuxdg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163aqqtsahf.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163vvusqqsd.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gydsruaf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163cnjdoysp.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163rocghorv.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ovuyzrrm.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wtprofpp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163aoemoous.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163mngrvdkz.html

================================================================================
来源：http://www.aibaodan.cn/163bdgcdcop.html

C. 函数与作用域
来源：http://www.xuanzx.com/163petdaesn.html

================================================================================
来源：http://www.aibaodan.cn/163ngzgqnuj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163gvcjqdfi.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163yqhneers.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lluzvxsq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163iblstmwy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163tjodncoe.html


<!-- 参考信息 -->