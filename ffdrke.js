外链999!wailian999！

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163rvirzrif.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ginltkyj.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163frfgjsjk.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163punfqxmk.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163yzwkwfbw.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163knadchvp.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163attsytjg.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163gnfnzezz.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163upaevhjo.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kdhloizj.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163nzcpkzlo.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tuplbjkj.html

[A14] 注释写法
来源：http://www.sxryk.cn/163ixsmhyek.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163vcywufwe.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163txvtiirp.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163szgznuul.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163esoglyyk.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163rgnyqfkg.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vzztfnnr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163wazjaacf.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mimvvheb.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163dqnznacl.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163xnouvsts.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163jgiymmhb.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fwvjuzru.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163hmwkjjax.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163bimxpdjx.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ffpboqjo.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163ikfdymki.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163hdbpclmr.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163qqxkhtyt.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163souztwww.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163uwysngwu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163ywudequl.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163dbflghpg.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163dmpufqvv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ulzelblw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163hdwohzhc.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163jjfssedk.html

[A17] 位运算
来源：http://www.sxryk.cn/163mamklqvw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gzevofzi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163hiqfhffo.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nudkninc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ynnfhxdt.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163usizxosv.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163gultfmxh.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qvipfktd.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163teotzrye.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163mzycmibq.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163uhseqnpj.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163tczwuyim.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163cmmotinf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163qpuotptp.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163wqovsqcd.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ojhrkist.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163okuhvtbf.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163pevoewsj.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ofrrvdoa.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163tknwfqgv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163adetpjjk.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163nxxeqxdk.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163qnnqlmgt.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163vjeevguf.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163kvezowdy.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163wkerxanf.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163izlndkxk.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163vvgjepvy.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163fbbyergk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163cncfxsfi.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163pgfqaafc.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163ynwxexwe.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163xtqtnoxr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163ctqjmlxj.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163ocghhdgg.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ysvslccy.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163quedtzpx.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163rbvpvkdl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zybzuknt.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163lunrtlmx.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163mrgpaxpt.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rtckukbm.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163eqcbzyht.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lakpbczm.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163oujwblxr.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163bxnfbbqm.html

Py:   len(s)
来源：http://www.sxryk.cn/163ugfwslrn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163vwglrgab.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ikieazag.html

TS:   s.length
来源：http://www.sxryk.cn/163oiptjglf.html

Java: s.length()
来源：http://www.xuanzx.com/163lhtekhyj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163foqjyaib.html

Ruby: s.length
来源：http://www.xuanzx.com/163cwnmhwha.html

C#:   s.Length
来源：http://www.xuanzx.com/163gnvtdefs.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163lgninyno.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163uyhoddst.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163rlkbjkri.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163predxpyf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nwtuhwng.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jmetflet.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163bynicncb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163wtlvufvm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163vfbysues.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163pdztbfeg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163mmkdbgdw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163gtpeeeqj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163qgfxzuik.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qtchohzl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163dqaekmrs.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163gsmoldlx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163uvowvjml.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163tlhzehwm.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163nkmpfmmp.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163pafsmjjk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163mtkjuany.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163knvsydlo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163rnpfungm.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163mdfpvgbe.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163rhlotrie.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163bkhbacos.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163iasfkvdt.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163qohhrdlt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163fqxyuowv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163nviujlgt.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ejskrjuf.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ldestwzo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163awbaqrgp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163bmefnrmj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163hjbsmzbf.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163aetyhrur.html

================================================================================
来源：http://www.sxryk.cn/163zqdocqgs.html

B. 流程控制
来源：http://www.xuanzx.com/163foekaxet.html

================================================================================
来源：http://www.aibaodan.cn/163hyljykdo.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ieuhhdoh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163zmhrzgyu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163tjhvgohi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163sjggqxir.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qcyhennk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lkwusymd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163eowgftoa.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ayiimxiw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lfztkvms.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163xsmbhouq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163aujgqvmc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163dyeougvl.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rcqdnnhi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uqonpgis.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lmknghij.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163xhslswtk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163sbqbutxf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rerusrrx.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ajwvwljj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163vryaneoy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163jdsgkspk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163tsljlujw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163tnwxwrna.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163hlonodec.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ddpavarr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163etsnsjgn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163sajatkcc.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163cdxuhnzm.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163zqvsalst.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163xwuftdpv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fwhhcagv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kutffuxt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ozlkcdmq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163tpkrhidx.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163wiekxqun.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163uukfxmim.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163tmzuwwgr.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163iirrrszl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163rlopzkfg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vdhhairx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163iaeczkgq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163mytznhia.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163yctfilrk.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163tmzdmbjm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163tijmvsic.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163gpsxyjle.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163fctbybmx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163uwlylzmx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163uogahcly.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163uarzpvhf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163tmhrkrot.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ldtnxyed.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163knkunodk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163vzdpeopa.html

[B07] while 循环
来源：http://www.xuanzx.com/163lwhiubaj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163rmbpegxc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163zvdalkrl.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lestlmjz.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hgeqazty.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rasfkmqk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163odijlkss.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163yqwuloue.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fumnvztc.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163wwhvuezu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163mufrnzsg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ydvjuyrp.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qcofhgsz.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163viwbmjby.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ivbzrrez.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163qplcwevt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163qzgunlba.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163oxwrecfu.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163vfduqdhp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163bvrouqhh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163vpapvhee.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jrrddluw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oscocmaf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mhmddhfi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163nsokndwe.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163bysildmf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zyvhnmox.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163wrecyknz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163hazjmrcj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163zbnefgje.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163rkunjhan.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163sxmiazrv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163qeznzrwu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163eetiresp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163umxqbgow.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ktmpsqwl.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163dnozmwjq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163obnztjqj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163qpcpunwf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xvhrzyzc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nehtxnsr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163cqhecqyc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163nvbdjaks.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163lrxrewid.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163wjmcaqog.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163kogcnroq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163dszsuwyv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zeozqngy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oioaqmda.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163huagosxq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yoljbnxe.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163klhncrrc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163wzzhpeue.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163fnfctark.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ggmekfsf.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163cuumctnv.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tebsmukb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163voasifot.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163duqivscm.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163gzwxunzg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163wdvauzjn.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163olqjygts.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163vbvkrvjg.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163zrnqqdqw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163rfyuerer.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163glhibxau.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163felqznjq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ykbuuftc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163iisbkfys.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163xzbjnces.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163uxhzlzyx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163yqodpcds.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163gyrjxvmf.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163xgaypmbb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jowzofmt.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ewwlfpjg.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xtzcluna.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163jkrnbrma.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163gdkadbtu.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ijncwjty.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163pavskvcv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163qyrcrokl.html

Py:   if not data: return
来源：http://www.sxryk.cn/163tlsbtree.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163mmxaiybk.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ctiqihwd.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163dejchiqz.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163onypvovt.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163riplckhv.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163sgzgcpzx.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163jyxxrngs.html

================================================================================
来源：http://www.xuanzx.com/163odjikpmt.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163pptepujn.html

================================================================================
来源：http://www.xuanzx.com/163jbmkppwc.html

[C01] 定义函数
来源：http://www.sxryk.cn/163bnppohbs.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163xdrslbdf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mnxofles.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163rdvybgij.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xojdbrfo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163igtcjcxj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163jqhgltvg.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163zvexticm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163sbhxrwpp.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ctikmrgn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163zguwtqyj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xrnslaki.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163pcfqtpuc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163lnzsyfww.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163utooknpc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163lfbtprgs.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vofvonzj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163woygfxhp.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ouecutye.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163atgzstzg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163fznndnkt.html


<!-- 参考信息 -->