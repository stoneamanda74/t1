外链999!wailian999！

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163tklhijer.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163prsupnnq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163vlwjpsaz.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163guxjftab.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lswqlida.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rwzaegiw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kuisxigi.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163bithxhit.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163uwtjjntx.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163cypxxhgy.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163cojczkwe.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163udzvpkfy.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163jhfbsejo.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163fdrocuow.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163dyycepoh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163zzkfvokr.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163yfobingw.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163hbqasyiw.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163ofryrmhe.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163sxhllriw.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163iqcarlen.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163kffwtrjz.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hnqsoriq.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gjbynrld.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163zvlofplb.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163aoipttby.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163zahxwshq.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zusqfbcd.html

[A14] 注释写法
来源：http://www.sxryk.cn/163vpqvstwh.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163ythanqps.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163akojgipy.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zeiqppco.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xojkccke.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163esutoeaw.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tklerlpy.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163qmjsltss.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163cvhdfnkr.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163bgwzfndg.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163kmfxxugw.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163aysemdmx.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163pawxtmzs.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bgajimvl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163hbtbzcla.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163tulotrlm.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163xwigkwhd.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163blzotvrj.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163lxtjiyih.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163mvetvpal.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163boolzmxu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163byurfshm.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163ytbizjlh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163oeqfcwru.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163xduwlgxs.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163pzksoktl.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163mtzgsbqy.html

[A17] 位运算
来源：http://www.aibaodan.cn/163vwouiwbr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ihyzumfd.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163mguwmxkk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ijfwucrt.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fwsdyfas.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kagmyeac.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163warwflpz.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mwloxcdn.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vzyrkppl.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163gzltpdpr.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163vjynehde.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163hoxjwljp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163sdogxpij.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163owxlnzej.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163zufeuiea.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ecztrwvp.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ahqkifpk.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163ksjamhmx.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163vvivjcix.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163ezzkplqk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163qsfnjfwr.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163hsyxiyqx.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163lybahzlc.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163zjimwpyw.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163mxgzulzf.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163izkglvdw.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163jaoohbui.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163abbmrhea.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163djupbcal.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ixhnsuax.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163hdyngrjv.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163anlzywsm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163yaxiwdsb.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163cvngsthc.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163dkrqhorv.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163zwsxlaen.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163lqipmidr.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163otusjuqe.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163lykqdrvg.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ybneggew.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163wpvsdyjn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fslbutpe.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ljyqfzea.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fqghfdik.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163lyyixiak.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163ypkuqocq.html

Py:   len(s)
来源：http://www.xuanzx.com/163kzumfkfo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163zddzkjjk.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163alozdijq.html

TS:   s.length
来源：http://www.aibaodan.cn/163eitojgin.html

Java: s.length()
来源：http://www.aibaodan.cn/163htwbxflq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163jaeymbdk.html

Ruby: s.length
来源：http://www.sxryk.cn/163alttitqy.html

C#:   s.Length
来源：http://www.xuanzx.com/163xvevxvbp.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163fjiobulc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163cbjphpsu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163dtqpzuly.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163srgezldb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cbzffmcv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wtgapnav.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163wdxyhcvj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163rihrtchx.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163uamgoclc.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163kpppmdze.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163hqdmaekd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163hiqemikk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zspignnf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163weixngkx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163kjzxmdvx.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163jgdxihva.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163zmezoytm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163kpqqkbrv.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163cukbvvbi.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163tavdybqq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163mqqhlyxv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zbxqhlkg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kndvkmsk.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163qjmnmkde.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163uwlurcbc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163envdqmlg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ocbyijdi.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163sggaikcq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163xdzboovz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ryvapfwq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163stkghzdk.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163kxatboyy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163fdvdhxls.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163djjunony.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ftokeobp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163mxtkjycj.html

================================================================================
来源：http://www.sxryk.cn/163dpscengm.html

B. 流程控制
来源：http://www.sxryk.cn/163zulspori.html

================================================================================
来源：http://www.aibaodan.cn/163fhwxobof.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163jifqtiwa.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163okbcndsc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163upxwsfxm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163sozkdfih.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dhcrsfzg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ooupbeeo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ufplahjl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163dudrnyhh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cnamywfv.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163prwsejpq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163acvawmfi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163unshgtkb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dopeorod.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xmfdnkfe.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qxxcfcwd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163kfgoyljq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163jjnzmerc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gyapdieh.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163lvyfmdte.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163vriedmnx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163jpuifqvk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163cpzakpjf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163kxvdtatm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163jxstfinr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163bhyfbwhj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163tjstfnyh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163lgezeibn.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163kjjzcuuh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163nwyxqmyt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163xvclftot.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fxzacoth.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163jrinhukd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163jdddxgpl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wijzxkhm.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163cvzhemkv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163vhbareui.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163isaiauxj.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163dvcqtvfn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163wibshsjb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163esajqwnr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163zdqxease.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163jsmoxfju.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163fdorojqi.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163nehpqeam.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bhtmofmd.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163hmbgmxdt.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163lugnwity.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163zgfmddcd.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163cmhngsjr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bydfypjj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163mmkxhecj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ublcxitb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163tsyuoeot.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163xszvhvug.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jzlqjvwi.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163puwrsxju.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163scijhiti.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nqlgikpg.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bwkgntrw.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cqganvwf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163rxblrpqp.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163nizsdsui.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163aziyeqbq.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163cyhcrrrr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ikfabvpt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ttdcioje.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rybugiou.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nnpjfdtw.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dlechanb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163gmnoztdx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163pyywkfhr.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tbyctjaf.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163kfxgxlum.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163atwlddhq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163eqabpdwy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vxzastie.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jfaguffr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yrkihcvq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163qukiwqur.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163apsrnatx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ozsrcbuy.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163nfewyuot.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163oakszoxp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163hkkxqolc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163wpokmwyp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163pldlbrtt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163eoudilin.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ahmfrldv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163dpyraxta.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163vtddwars.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163btjyiylu.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163witubwkk.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163nqvcbfsu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qerkqnir.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163escfsmvg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nfqihmos.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163uqsoqqha.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ewxzedsz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ogmawixq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163kuyrqvox.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jlvyhwmr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ylypjsfu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fpbhtfwv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kmxzwske.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163slulkvyu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163htylmgyn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163cydpxopc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163obubdvvg.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163deiwqapz.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163aigmyfgr.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163khymkmai.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163dxidlugx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163pijahfce.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163vxiiiqrp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ormyyjvd.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163tsiyateg.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163rdczlyod.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163yzqzlsfy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163qrpvbrtf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163jtcsgrti.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163skbotbhi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163mfenfjmy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163lmbsbtky.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163tcjouwmr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163nwgdihkc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163oscmawdv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163gxknejpi.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163vdhmlwmn.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163qpazfmdf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ytzxxmrs.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ezemgypb.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163fbkuhynj.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163eickyido.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tsjamcxe.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xjfzpkio.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163sjfvctbu.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ewxxmmbt.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163qkiumwbs.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163xoaedugl.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vycovexf.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163tcbtdkdd.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ddfmfolk.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163djhbgsuh.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163oblielcu.html

================================================================================
来源：http://www.xuanzx.com/163xdasfcbn.html

C. 函数与作用域
来源：http://www.xuanzx.com/163yylfgnzt.html

================================================================================
来源：http://www.xuanzx.com/163gpcqmppb.html

[C01] 定义函数
来源：http://www.sxryk.cn/163qztbobno.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163eeigdjnn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jvbjjrau.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ygyyugyy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163tsjprgxb.html


<!-- 参考信息 -->