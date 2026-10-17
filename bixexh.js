外链999!wailian999！

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163cptyztaq.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ifgymufj.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163pwybjipf.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ceuxvszw.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163feagqiut.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nxinapwk.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qutwfhod.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163cmhzcsoz.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rfnjkgfg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pyutmadh.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163urdlnmxq.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163nzmajpvu.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163hmiidjew.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163fyepjmwe.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163trbexbbo.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163bswerhgq.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163immhwrax.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163tdnfszjk.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163soiljbvh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163jbldmrli.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hywdhxqa.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163lbxksdlv.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gfmwjvug.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bathzbgk.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163litkwdeo.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bcqnrcho.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163trnpbhfn.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163msdunlwz.html

[A14] 注释写法
来源：http://www.xuanzx.com/163swgetbmy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163tgncrscq.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nyiblfej.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zeardsqe.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163mztptozl.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163izqyzcdb.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ijsjedjy.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163vzdtyvwq.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163uffdzome.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163yxzmmiua.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163afckooua.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163rpcsaoqr.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vdhcqmpo.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163swfrlzkz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163vqotgeol.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163ytcjtccf.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163jvakadmz.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vqqdhapx.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163uqmmiycw.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163wovecxxo.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163jdbgvnxy.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ogfvefdf.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163hliupccq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163xojeohgp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163xrzhehgf.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163niinlmjo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163nsepqxql.html

[A17] 位运算
来源：http://www.sxryk.cn/163ghjomuuw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rzosykam.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163mppwxwbk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163itgnhxod.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rdujkjxk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163aadazmvl.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xukjcmuf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ymnveowc.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pkxadkpr.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163neqtqfou.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163tmxtmmzd.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163lpltvixd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163asodsxnh.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163qqvcyney.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163saexjnvv.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ubmbmvet.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163gdhxhdnl.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163dffrzuhr.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163oxmrpoyv.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163pkelvuwx.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163nehdwygs.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163stlfycdj.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ezpkfwgy.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ybtlmlgx.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163twghusvt.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163kgtiorkc.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163qoynpmny.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163xgdulshk.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163qiogcpfu.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163kkzvjmxw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ykormxmb.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163zumkgxqs.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163eungmymw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163jbksnrfq.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163nzaafgai.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163knvnytnl.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163ygdeznwp.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163vnvnplhr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vgxhjvzv.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163otumxidm.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163whqxaxok.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163iydxmfto.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163oszdzyxk.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hypuowcx.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163aannlgvc.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163voinqsjh.html

Py:   len(s)
来源：http://www.xuanzx.com/163szvhyaim.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163hmsionyk.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163zpglpfck.html

TS:   s.length
来源：http://www.sxryk.cn/163lvohhfnr.html

Java: s.length()
来源：http://www.sxryk.cn/163yspskpbp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163kzkcfieu.html

Ruby: s.length
来源：http://www.aibaodan.cn/163dxfdyein.html

C#:   s.Length
来源：http://www.sxryk.cn/163qrlgmzcq.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163ficcfeux.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163nonpwoul.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163gagxldwe.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163vqcdufiz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lekvwkma.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ssyzxgyp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ugxyjepx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163tvguheqp.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163dmzwxycl.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163iahdrrol.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163hhvwymjg.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ypwuiloe.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163upjbzqce.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qyabkmyz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163hlgvbggk.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163uvcclnbx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163fjevomln.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163mdzboabm.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163gjlyygao.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163byaipkoh.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163hfrknxww.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hxzlklqr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hdxxfnll.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163pxjqbbyi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ccstlilc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163dahjbhut.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163zlsvriws.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163gfgjymkz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163jsavjqko.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163uxfohqoo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163wmsakbor.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163amjffjon.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ncumqvnr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163fkrpstcb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163wovoudej.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163psavmfur.html

================================================================================
来源：http://www.xuanzx.com/163siqpqxsu.html

B. 流程控制
来源：http://www.sxryk.cn/163zndjxuci.html

================================================================================
来源：http://www.sxryk.cn/163htngprqx.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ytgzxbvl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163txpivfci.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ghakhmls.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lqqnqpys.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jgpbrwbr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xpoxpacd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163nenyvdkk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ratpjlmk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xrotzqqy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163azcsizbm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163kfjcjxgk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163mgspflzb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163svderrap.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wscpbgdo.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hgbjxtzw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163lotbwylg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163miwjopfd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163smqngkbu.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ypewrssy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163mfyctzak.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163rnpbynzg.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163szsbhuqy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wwqcmxmc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163owajbvyp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163nrfsfnvd.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163fslctkao.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163lybjdiqy.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163mejklblu.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163daqcztqb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163fqmhvfqr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tqfabqhz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163uckfvbjm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163hcculnvd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163izlhewuk.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163rrdkcbwg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163snbbglef.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163xzbsgdhu.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163fpgovfqu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163fdvaraxe.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hytrgvba.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ywjxwvbi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ovevkwls.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163gbqzpirr.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163tgnqyxde.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163fljxesle.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163rbxarmez.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163gnbfubsf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163eugrszqy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ugetxmnu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bguvsbev.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163fxrdrkgg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163cweyjwoc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163zpdomlbo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163twkxjyqb.html

[B07] while 循环
来源：http://www.xuanzx.com/163uafpltza.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163jkhljmxb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163fjsgdvxr.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vaegosor.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hxvcxocj.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vsnbbcui.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163xgwuaimf.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163avjnazgp.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dfdwzqlx.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ecfngvug.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163bfkszefd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163qdalrlrm.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zyrnceqg.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ozchyrfe.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163afuwjgfw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163mfklrtnh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163mspffqjx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yqcfthqr.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163byjsxgux.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163qbapafbk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163vrvkjmhn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rdsicrcz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163beenrggn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nqprfyce.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163lduvjwib.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163auootnxi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wyjvwlts.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163kntieljj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ofgwriqf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163lfgezwwo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xocznliy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163dhmoxisu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163habldxqf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163oluwpzbr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163cdtwbpmu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163mclaulqg.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163nxicdgwx.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163akknczon.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163dvqidcuj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ymxrjwav.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163erapqlzf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163sifnjxkq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163qrkugrch.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wplskouk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163comyqljq.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163rcwlavsh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163btymrtsg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163tdfjijdg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hltnyxzk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163todjivom.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163phrfujxa.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163mfwmwioy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163pngmfbim.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fdtohpbv.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163woqoanvg.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163cfuvnccx.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163brxolafc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vfdalgqt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vpcmhbrx.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163xuoehlwl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163tyiabcin.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163eedgwfhk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163wrinkkjp.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wawsexfg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ohnbbbcj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ewbsdvzk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163opcwtfji.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163wyfpkvsy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jgtaqhmg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163psuaptxt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163maxsekwk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163nboxnkaq.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163icfjqjoy.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163goyvluje.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ouucffvv.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163cryqiimt.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163skcngkog.html

Java: a && b || !c
来源：http://www.sxryk.cn/163awxifoie.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163iqncwspc.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163tkriviuv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163crqobxcy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163nyrmuwlt.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163mhpsvjue.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zxthjvxc.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163yzrsvzju.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163lqyhmnhe.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163jhhlycjm.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163mhygmwaz.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163pitojfbe.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163mifioqxn.html

================================================================================
来源：http://www.aibaodan.cn/163bbqlfltp.html

C. 函数与作用域
来源：http://www.sxryk.cn/163xsqmjgnl.html

================================================================================
来源：http://www.sxryk.cn/163dnypltnu.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163yiqrwstg.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163lifbpyap.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163sazqjnoc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163bzwiegvq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dnfrvexp.html


<!-- 参考信息 -->