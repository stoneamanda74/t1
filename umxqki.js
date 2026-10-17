外链999!wailian999！

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wvzhjyhl.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xhycwmxt.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lqavajhf.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163iinrihcc.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tyciydmi.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ysecjele.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163afurhrsu.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163qhchnrei.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163aneyiiel.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163yhwlmkjs.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ynkzjnvz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163udfxemfz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163jzizkszq.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163ekhilidf.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163umvcffrg.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163ygalmror.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bkigdzsm.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163ioeukvkv.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ltxokpsx.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hkpegdxn.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163pdfwnppi.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kdrucepo.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163vhmhgxrt.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ohoybipl.html

[A14] 注释写法
来源：http://www.xuanzx.com/163uuorhmfm.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163ekejjatn.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163pxojnmer.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hbiaozdg.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163bsuwrukz.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163cshgjogp.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ofygaves.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163gtushsdq.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163pbnoxhoy.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163btcktohu.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163vgcxfidm.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163yjypewjz.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163xlntzqmz.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163boarnsbr.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163flixbywl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163topifubr.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163txmtqizm.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163belneqcw.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163gmzysoju.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163skanadcv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163tgilqwww.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163wlcytgbe.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163wqcklhsx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163cnluxexo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163ocunjfkh.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163idszvhfo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163lmwrxxpg.html

[A17] 位运算
来源：http://www.aibaodan.cn/163kvmvvnea.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163follrlsr.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163bsuiconz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wjfkyhjg.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ffdnkqyk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ufynjyfc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163idhjttst.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hqipomak.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cgavqkdn.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163pxqoynby.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163jrcjdxnh.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163szxvhlsf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163pmbnabil.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163zawluhag.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163pyqirwmz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163evoxlnon.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163iccktmla.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163fobxvuvl.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163obvnpcgu.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163ypauxafr.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ikecqboc.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163sqfdjcnw.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163wgbkzggn.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163aozeblpc.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163kkzsxixf.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163hmvkckio.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163lhxkbujz.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163kqxagbrd.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163zdxqmyxa.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163upfpaane.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ooghlete.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163abcubinr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163jqxemmwb.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163hdbmeffq.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163whippyji.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163cslarbyi.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163zztwzxlo.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163ithstjxm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163nehyfbjl.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163tenconck.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163gxeztmgk.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pmmqisnp.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fliubteo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dtynfwuf.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163mbyxsmir.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163samaeqrc.html

Py:   len(s)
来源：http://www.xuanzx.com/163ndzjwkbz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163ilpccjpo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163amvdhzvw.html

TS:   s.length
来源：http://www.aibaodan.cn/163nretrzak.html

Java: s.length()
来源：http://www.xuanzx.com/163pdfbwzzv.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163ogoaoodl.html

Ruby: s.length
来源：http://www.sxryk.cn/163fzdavlbv.html

C#:   s.Length
来源：http://www.aibaodan.cn/163wjvcyhhp.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163hdgizxjg.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163jhvyfzmv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163sxfrjyep.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nckzuspl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dfsqwfrk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cffomouv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163wkfjjzel.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163dqtztwuz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163xcszzlbd.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163lhmllfnv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163xnlorfgy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163oaabnfel.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163eybpmgof.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163kutimcsp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163jruycvqm.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163gnxbjegw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ykkeshcb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163zciejzxi.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163qbjvuidl.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163bdgemdhy.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163tjpvecuu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163bqplerfq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163gayhixec.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163miuficoj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jrfanhaw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163pwjoswyp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163voxwccjv.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163hredwnfl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163mdzaagai.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vsivbniq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tctlryqp.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163vqxgkzbz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163hexzcilt.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163jcjdzcew.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163jlppjnfd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163vtiruxsc.html

================================================================================
来源：http://www.sxryk.cn/163eaubpass.html

B. 流程控制
来源：http://www.aibaodan.cn/163acfsbweh.html

================================================================================
来源：http://www.aibaodan.cn/163diggkrwh.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163fytnzjpa.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163wgizfpdr.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163hgpaeplb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bbghiykw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yeccvvyk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163axttvtnq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ylnhyoda.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ogqixxny.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lzihvlhz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163okxdyrfk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163szumigyc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163akgptfcm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tprlxvuh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bakwltes.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pxkfvhav.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ejjjruqt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163dxvbczxu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163alclljyv.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163cvygyypd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163mjothkvl.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ipmpijxb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fguvxgiq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ibyghynj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163rdcmsord.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163beglviry.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163hfgvfmeb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163pusdphva.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163qlnlqfqb.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163recfzmgv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163wabzriri.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163etkkfbzv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fjzpfayj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163yynrwcue.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ownnyrih.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163mvjjtmix.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163mptjgjft.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163xubcbvlc.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163raovrpcc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163pgqjeznc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163tahujnpc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163bewuozio.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163tswogisf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163zkqvzpdf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163etmfzeic.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163xxsuctmo.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163wfnqkupc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163iaomhuhh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ervjazuu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bvtonnqh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163quvfmqgv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163srkwpyhg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163gmvrpptw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163oixmvhmj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163zagveemb.html

[B07] while 循环
来源：http://www.aibaodan.cn/163iqbvgajg.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163wdzzilgw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ymsoctil.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163onjpwgov.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dqtrkhrr.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ldpmmxho.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163uswbxlbq.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163kvwecmoh.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163snksknoa.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163scvsczbz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163zperbykm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ywjlpjuf.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bxgzehiw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ddtwrpee.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nnqrdjmw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163trxzztbz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163phiwhofv.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lfghhpvu.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163xxyaecyu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163pzdrnmng.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163utoceopn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163aecraafc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163aohctvnn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bumcsnpr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163qbuseead.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163oeocnwhw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pmjiwmwf.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163lawtjhbo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163oaxmuuxd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163djuxiiqe.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163szdcdifk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163qqhtvzii.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163nedellaz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163usytcpoq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163bwokbzkc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163xvvhuilp.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163aegyagqw.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163foxcehiu.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163pwqdriha.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ulnenmpl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ljpnsmzq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163gdlsuyzp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163vwudqlso.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163aembshcp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163lyguafub.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163wlpzcpxe.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163gepdcovr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163nkumsdas.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wuqejwem.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xhzweuih.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xbomiszm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163edfaogtk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163nrntuncl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163tlkkgzwr.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163slitftgc.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163nrruguup.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163hzluhbdx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xcerykmz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163phvmcafk.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163bccecxxt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ybvpwogk.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163hjyoqbzr.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163jgvasdol.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163cbvtcsno.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163knbeocnu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ivqcsxsb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163yhcscqod.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rfjofjuo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xnklkmab.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ipmdmdan.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163lpgivxrs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zimfzhxz.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ixrpnqcn.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163oqkecgjn.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163yuzenvfa.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163vhatpzxp.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163eksaymcn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163szbefcir.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zeiestqu.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ebbybflv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163hmnviqlo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163xihdtvxu.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163uebomngq.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lqyqylfb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163rhoveszv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163nbblyfuk.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163cvjbcnxd.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163iqxtbmtf.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163kgukwcfu.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ddwsvfpb.html

================================================================================
来源：http://www.sxryk.cn/163ltflqpdu.html

C. 函数与作用域
来源：http://www.sxryk.cn/163bfgtxmrv.html

================================================================================
来源：http://www.aibaodan.cn/163rtokxulk.html

[C01] 定义函数
来源：http://www.xuanzx.com/163avjepqld.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ikudchim.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tdpignzv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ucwzaexh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qjlweqpv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ymsypdad.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ejjcnhfw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163neuezqev.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ariilzgz.html


<!-- 参考信息 -->