外链999!wailian999！

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163sguistfl.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163quixuznw.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163gytodkma.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dskxxbsn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jpvmfsco.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nbfmmwdf.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lusgqfka.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163snmonbyw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cujjlhdg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163osppnpmi.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163qshlbtrz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163hwwrjlff.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163hrpwnggb.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163qlfxaxyp.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163xrrjtyii.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163ujudibyz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163slvkqoko.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163egbwvnyv.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163wdzskmdc.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163bapqrcjz.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ierbzylu.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163vyrxvyzd.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rfqbkeci.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jlgwzwia.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163atrttmsw.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nhawpiza.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163bvvwjcyd.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bghysabz.html

[A14] 注释写法
来源：http://www.sxryk.cn/163upcnsjjx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163lxpwphef.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qmmrkhlb.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tcjtnrlz.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xqiuttqx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163bfsmwryb.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163djtjrehh.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163phfbldjj.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zohrnxwd.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163wsyqcwmd.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163jbupyzfk.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163ciflmfsz.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163itiggxdk.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163uqmchhft.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ueelpyhl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163oqhhuyza.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163uetlcdcc.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163jotrruqd.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163opgsekcx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163vkdsxcnw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163usaqjinv.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163pfifcznm.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163swozlslr.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163erewxqeg.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163xnufhjmy.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163ksgqlmnd.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163rvbzqjfo.html

[A17] 位运算
来源：http://www.xuanzx.com/163vigtfnsm.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uxoikpsp.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163fsljksex.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lgrjqtgv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163trcfmsdh.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vxkgbioo.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cbyeiwyt.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rdjshwgs.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gvzqkroj.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163yrdfqvzi.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163aahppxij.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163rxsvcuit.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163mioqmoyv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163yegpsezw.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163qqsrtgns.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163inipeqgg.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163alhqbmet.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163khipumvg.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163pedgfxfi.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163mmgjsxwx.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163wcllexxv.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163inwgqhbd.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ofcljnyl.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163bhpagfgr.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163wklnyjhk.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ygsnwmma.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163oafxguxb.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163maohtwit.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163fvdawuji.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163zmsmnnhg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163zlpulamg.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163akmnoyio.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163zuybbzle.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ihokttas.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163jtvdqhoc.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163hqkofgaa.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163bbjfzbqq.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163vzzsqeot.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163oqfdkxbj.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163vcwghrpb.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163lxcrlhaz.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ihveouuc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rjqfftiq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qdlynvgu.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163lvfszein.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163zcpnagmk.html

Py:   len(s)
来源：http://www.xuanzx.com/163gqirahwo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163vkzvkddl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163rutgeygn.html

TS:   s.length
来源：http://www.aibaodan.cn/163xejeqzyo.html

Java: s.length()
来源：http://www.aibaodan.cn/163uyefjihc.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163ryorxfui.html

Ruby: s.length
来源：http://www.aibaodan.cn/163yhgjilsg.html

C#:   s.Length
来源：http://www.xuanzx.com/163ypzxwygd.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163yjcwinxq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163erbqtiuk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163nqgwkoye.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ativvoqi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qdzbvueu.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kcvcapql.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163mhvyihrp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163tbhxqinb.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163tyrgfzek.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163kjrknvff.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163gpzdhhsv.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163cdylwwdf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tnedneuu.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163hcxszmal.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163nffnzvdh.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163qcuxtkrv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ybkyrwre.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163bxgdlwch.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163aeevczae.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163pyzbysmv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163nxseiwvi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hkgwdzvx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163eijapdtz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163kvlttpsz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wtbdmquy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163fkuqouds.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ticfzxmw.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163qklzcvek.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163fqhlofps.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163avxpsjms.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163dgeplahe.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ghxfvjar.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163gmbhmcyy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163iwhgrobg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163rgiofjxu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163jkrfpzac.html

================================================================================
来源：http://www.xuanzx.com/163buxxfaru.html

B. 流程控制
来源：http://www.aibaodan.cn/163dvzyxykm.html

================================================================================
来源：http://www.sxryk.cn/163bdrapvwe.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163umofqcri.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163pgcgblrp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163sfqpiflw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dwesykmg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vouaqunw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163njmutdsw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163sxtzjcft.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163lzzthbfs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vffpmgor.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163cdgvsiqz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163ychcwbyw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ceakqrjy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jxcyapfg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163iyowmnxh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ybwygkqh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ugeojebf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ywaqwobx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dnwjmuoc.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163dxxqngfi.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163fpypdqko.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163mvmtoeke.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163scqflyjw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163sdtgmluh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ybejqwgy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163gaurabui.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163egaghmon.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163sckjyvdf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163xeuzemqo.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163wgxfzohd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163uitprkgo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163neynrkgf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ejgtjvjt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163cugkclhe.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163dwnawogy.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ptizwmuv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163jqfnnkls.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163twxtdxop.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163xxadxlma.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163nqdlpscc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163gfgvirbu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163gphnmwck.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163upqchfjh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163vcirmqnq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163yzzxphax.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163rmdnqueh.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ewsncyhh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163vtnwewet.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ywcqknli.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vgxzqbsh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163fegipyrn.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163hegeiigq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163askzpbhg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163vsrcfmma.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163dfezzyed.html

[B07] while 循环
来源：http://www.aibaodan.cn/163nwmorrxo.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163oggrhlpc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163tauqjwzq.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163unidqjga.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ktsvaogg.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yorpchaw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163sqpkargo.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163bhnrktah.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rjiimgqo.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163vwdmiamu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ywfmyioh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fzqmdnlc.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vyrtddgk.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sdhabcqo.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163emnllkxt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163lyzltghm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163qlzukmna.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hodaclml.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163obstnqao.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163csjrltvg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163pqpntzzk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163egppwazw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163irunppit.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pfsehjlu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163fsppdjld.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163lanmbshr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163slzkqkfj.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163emhswiqf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163zzdackhj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163qcefcxiz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ussscotl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163vuwubvhw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163nsfrklmy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163yljuvygi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163gjnwoyzd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ntjygrjx.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163kveahnuv.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163enqlsvjc.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vtyalfde.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bvddives.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163axvaqqpr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163hkhcjxbf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163vvjgxvbq.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ohpvwjux.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fxnrassm.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163veokwycu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163cvmqdgoh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163vwmxdlru.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zpkanznw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cndihlqc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wxyudkfm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163dnjlmpxa.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163zklsxxni.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163cvtnulyh.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163kgyvehxy.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163grnrcxxk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163dxcfotkd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ilkgtrmw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163gxwaovve.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163wvzeazjj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163xmdpjfjb.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dmlqetnc.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dflzpmje.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xadhhvly.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163lyaldmgb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163atuwarxf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163siczhkza.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ozlsbiwq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gcegmulm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163wicxqnxy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163hwfhfbxa.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163dditszep.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163vcoapxik.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163dfciipze.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163kyzjusek.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163bslmpbjv.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163fkhsxson.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ipchtusq.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163uuxctapm.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163lxvcmubh.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163cweqecwu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163xnghdpfl.html

Py:   if not data: return
来源：http://www.xuanzx.com/163whlemvzu.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gotpxxcb.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163lfkdyywa.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163okvuhxzu.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ouamrrsg.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163fnrzrjuo.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ujxvzuvi.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163kuxfkrgl.html

================================================================================
来源：http://www.aibaodan.cn/163ootixlal.html

C. 函数与作用域
来源：http://www.sxryk.cn/163jtpmdjyd.html

================================================================================
来源：http://www.sxryk.cn/163awnnvkyp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163sjxugkae.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ravcesqx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ngzqhvvl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163uenafaft.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qwdymqjj.html


<!-- 参考信息 -->