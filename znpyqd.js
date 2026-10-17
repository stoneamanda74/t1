外链999!wailian999！

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lkmlrlsh.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gedppmdy.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163anwzgqpd.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163uuxxsrrt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163qgjzvdzb.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163rkvwzpsj.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163zrpdaxwz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163omdlhpzj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163rzkshxrq.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163kofufcay.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163qyesnltq.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163iedyhwcv.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mqsehiij.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163cafrjxiz.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rbaskfbq.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dwlfjskn.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163qotrzket.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kjronvsy.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163idlsmffc.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dtedspqs.html

[A14] 注释写法
来源：http://www.sxryk.cn/163lycxgklp.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163nkhzekdh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163heembhkf.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163oorcywrw.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163bmuflzcc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163bgxypxqk.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nkmbmuph.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163geepkvoh.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ttlychzh.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163oxvmwtoa.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163jzntnhwr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163dvfwochz.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fxeomlwc.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hjqhlvzh.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163rfpywuhg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163bkoclrwv.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163uicivzgl.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163vvruwekx.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ytoiffkm.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163anxnbeya.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163qktiwcyz.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163nzwqxztd.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163osleirxh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163fipxiqbj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163cnbarxts.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163mlzubqrl.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163fjfkcyja.html

[A17] 位运算
来源：http://www.xuanzx.com/163fmmtplna.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wygdwrfm.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163lzoaqujp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jxowuudn.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163nskxsycy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hcemvrto.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163odjusrqa.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wnyyyznr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bpbjbjma.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163wcmfwpak.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163lkzdcimx.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163qsrmydyi.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163hndhwwzn.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ftkhrlem.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ukhtsujx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163amajwxfk.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163dqogwzcr.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163qaxtmclt.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163sqeyhxep.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163eyfnjjpq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163voyzxtoa.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163wajoqoif.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163icnfgyhq.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163icuolmyh.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163payazjbr.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163qvchcsuh.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163apyhocwj.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ggizovee.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163jhgdhoim.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163haelywlk.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163adwnmamy.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163zaemmpec.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163wredocvo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163lwxuxdbs.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163hhqnkriu.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ylpvndia.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163edwtnttk.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163bmzhceaj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ycylynhk.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163apllywew.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163opwpxjzh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yrohmtms.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vhpywpao.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ljiqgmbh.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163nwzqhvts.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163nmeetuoj.html

Py:   len(s)
来源：http://www.xuanzx.com/163auougkwa.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163svmygjhc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163jlwuwgje.html

TS:   s.length
来源：http://www.aibaodan.cn/163zdruxtnr.html

Java: s.length()
来源：http://www.aibaodan.cn/163wgeebemu.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ejveipaq.html

Ruby: s.length
来源：http://www.aibaodan.cn/163gxkdknsh.html

C#:   s.Length
来源：http://www.sxryk.cn/163dyjjgscx.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163crjfgadf.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163cxdlaaio.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163cippagfc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gclsqbvs.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163azgyiunw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163cmvxddjo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163pmyfseza.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ccgjzguv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163xmbkbalh.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163dsxldheg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163lntxdpik.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163elnnselk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163axnllfop.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163kdzupnde.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163mhhxkrkd.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163xaszzkub.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163xrnyujbz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163rtjzlbjz.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163phzdexaj.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ssstmqrq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163erwzgdlh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163lrzbbfqq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ujbfinns.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163ltszvrfb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ahjyekbe.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163svzeuxmj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163fbqhuxza.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163uszkdfpl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163vlvrhhva.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163crnrdnzg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163upmdfysr.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ouagtpzr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ieiuyarc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163gmvdstix.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163gvvfqkky.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fevpnmcw.html

================================================================================
来源：http://www.xuanzx.com/163xvlckzhr.html

B. 流程控制
来源：http://www.aibaodan.cn/163rjzynsfs.html

================================================================================
来源：http://www.sxryk.cn/163rttmipgk.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163bnmacsct.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163zvavriyt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163kcuiewam.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jdracsay.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ljbhrusj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uepfztoa.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163srxacrzf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163bgzmhtmc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rrllfviz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163twuvozzq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163iejnlrzd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ebvxbvki.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jnhxrkku.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ddudglca.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163oopqgumt.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163hqfrrben.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163igofbsub.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nzavumfx.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163pwkwnqwc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163bbwuxmeb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163rtakdggx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163cbyuxasw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163oeoclhue.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163nnodqksa.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163tijlazpl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163bzjcynjd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163trllpotr.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163xiulcnay.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163kfgdhuud.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163gpueusks.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163badbzafs.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wihirkar.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163dfeausil.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163qnlcwdpz.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163acnrpzqm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163bxmyreyg.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163nsmwpogs.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163bnmkcmzo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163kwexmzld.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zwfwzzdm.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nqkrizha.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163wtxykhna.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163pogjhwcl.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163sgrswffv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163lqwovqpg.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163uwsngbuo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163mxruxlce.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163zcwjnylk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qugechkz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163fjkohhhq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163kvonldnc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163pqhbqotv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163rjsdwjcb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ljylowwm.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jtbsxwwf.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163rnczxtet.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163jxmvrdwn.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bnzbuxql.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pvrziwyr.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cwovjngp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ttouxkit.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ciriuxxj.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rytfznog.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163rteijcfs.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ohoqahak.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163nshaigxa.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ahfvklox.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fblllgix.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ihlbgygz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163zfbfpvcv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163znnibdnw.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163oylbgnts.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163asjiixax.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ptetzkja.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163szpnylzv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mklevjdu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bjyxeshy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163oobhdrvm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163glsmmjmw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163opjvwlur.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xnovvztg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163cvxiaeaz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163boimgklu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bcikwjgr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163wpbdknhx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163mkgvdxxn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163cjoarexu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163eluoqqyp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163auqkpuvs.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163sigiprcp.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ezygypud.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163fnuindct.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163bwnzfupg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163acucbwhr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mdpwdhjp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163clttaxvl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163wkgssupo.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163kzclolsu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ahpiuvcl.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163mnetwguf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163tijhdbft.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163qxinuaxa.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tggfkroe.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mogvvhhx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hpvjlyml.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163fsqwmehm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163urdgsrmv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163sgyrouar.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163svlaucms.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163kcdjympd.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163wkyixhqq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163tgqscphr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kinpgevi.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163znovsrlw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163wilixwbu.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163umtgddhk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163zlumtryn.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163zwtjbztk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163miyghjgk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163iplencdq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vmcezuhy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jjyrkkli.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163kgckxivy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hddeujgl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163soteezjv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163lqczhcrz.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163liudqcfw.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ddsosktv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163daduedao.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163crtarshd.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ffanpbwk.html

Java: a && b || !c
来源：http://www.xuanzx.com/163wqcldcwx.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163brqjkhwt.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mwcxbvgc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163rgfhzdud.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ipghgtxh.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163fstyofye.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163efeptmqa.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163asdbhxgc.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163sbvdpjgy.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gvlrossu.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163wcngxpuq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163zjpyqkef.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163iiovpndb.html

================================================================================
来源：http://www.aibaodan.cn/163hcpdljln.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163feazelqh.html

================================================================================
来源：http://www.xuanzx.com/163egrrbrjd.html

[C01] 定义函数
来源：http://www.sxryk.cn/163dnronbmr.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xyajosuj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163eejpqnvq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ptmggyjd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ornqxhyi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xdilkkja.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163mnvibwuq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163aqrjllgh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qjgcjqfz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vvgyafic.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163tulscgfn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163enwfqosa.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hygftlxr.html


<!-- 参考信息 -->