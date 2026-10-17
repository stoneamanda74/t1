外链999!wailian999！

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fnytwvep.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163swmeaosl.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163qcduzbek.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163bxgvwzvd.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163uiwwklcq.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163hkrobgsc.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163lcdwxmrx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163nrfygbbi.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163mnurzwpo.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163hxhpqvnb.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163mmhiokal.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163emrwtiyt.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163aerljekh.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163flysamem.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tbkmqvcc.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dymatnse.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163zqynpfuw.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163sspsrdja.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163pzhraxgq.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bqjbnuur.html

[A14] 注释写法
来源：http://www.xuanzx.com/163sbklkgzw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163jkqkreju.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dvkyhxuq.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163njlkixvj.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gnekjnkp.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163xfrgxpwc.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vdvlwkyn.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163srnlvgox.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qqeuhtna.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163jbefpdma.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163ydqlplwk.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163qqizaski.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bkcetthl.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163mfmtrrlz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163ldhojimh.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163vbkjmlbg.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163wrndrpzp.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163lehkkwtv.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ydaxjgvb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163kihalxiv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163ypdvomgp.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163jsurcmtm.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163wupcndqb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163lvdaswcx.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163gljbocmm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163ionxzgth.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163aqaxdyud.html

[A17] 位运算
来源：http://www.sxryk.cn/163bvwnetyl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yrmgtpkw.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163azfjahcf.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163iwumbmyt.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163repkyprs.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xqmwqffu.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tujdzaom.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rrqejcff.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tqkiflnv.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163ofhmrdzn.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163njfsojqb.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163qxigkhhu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163yhlktikd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163odyippmy.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163wlypcrvf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163qviyqepy.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163jmpkdixb.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163kqiwdhls.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163betscyis.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163eybjjbdt.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163rkpvfvxk.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ylstdvrl.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163cdayojjc.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163rxtwpxcf.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163tzyxdszi.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163lhnsptmp.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ptebphhp.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163cosorpge.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ssganrnu.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163izllcnmu.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163grqliahn.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ayafpjju.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163kxxyzpvt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163fpiuvubo.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163kkddotjj.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163lkgcpznw.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163kotougon.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163shampktg.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ritixpef.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163jpgxvpbn.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163sxvcsibe.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lrszqfqx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gpxrtirr.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dftecbsy.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163jslqmkrx.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163eteoxnzz.html

Py:   len(s)
来源：http://www.aibaodan.cn/163jsqinjbg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ksyfhicu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163urkpiica.html

TS:   s.length
来源：http://www.aibaodan.cn/163fdnoupds.html

Java: s.length()
来源：http://www.aibaodan.cn/163hqarxlvs.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163fkywnrwk.html

Ruby: s.length
来源：http://www.aibaodan.cn/163vcuwmdac.html

C#:   s.Length
来源：http://www.sxryk.cn/163fwsocxqj.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163mvsqpxrp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163vnwpubgm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163nvuxvczz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lqgfouza.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wnjjidte.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gvsopojd.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163zgafgvfi.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163uulifndn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163paqvtubc.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163semjgapp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163bhnzzrwy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163spgrxdrr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163rprwooia.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163uaxydnff.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ifoyhpho.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163gigoqnpt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163nklmzzmw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163bxnrohvy.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163eulpaate.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163eixehnlc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163kxbsinix.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163feiseetq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kgevvvnv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163vqctwlau.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163xitomouq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163hqmncddq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163elbagamn.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ivgeazfv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163iocmkcad.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163aqioaopb.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163czykxrdc.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163cmanopne.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163attshlsk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163gzvtqdes.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ikmdmtqg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163qgneugxi.html

================================================================================
来源：http://www.sxryk.cn/163aepxurev.html

B. 流程控制
来源：http://www.aibaodan.cn/163fdkgrxxz.html

================================================================================
来源：http://www.aibaodan.cn/163syvaeqhp.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163oxossotd.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163vfyvccih.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163eisohbvt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ahttsrml.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bgblzmdr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uliunroe.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163dktpocuu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163inqwgcrr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uzyuqteb.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163nsgzndoh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163ludmbesj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163osigddhh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163asdqxhyq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163njuwasht.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rnsfnrtn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163agkupcmh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163mbkagnld.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tmnnzxpr.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163mostprtv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ststxtms.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163tbzwpehy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163dksldzku.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rmmuoznn.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163fuayxfoj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163dmhlsmmc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163urrlbiwi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163njbavujz.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163hykxbgtx.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ybhkqenm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163vabdlfnr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gciowtcy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163rtjaxktt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163iiqjctzp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163yfuqqrgu.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163jbgsdvcl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163vvcdhhrc.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163wljhdido.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ozmhayyk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163bduqmxlo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bbbtjyvm.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163aomqquxd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163bjagwahp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163pfbqwzmv.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ieraqgai.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ljcuehld.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163labkdbvo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163bifpcaqq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163cqzlkngf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nwygvyph.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tzlrkfic.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163htcptnjm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163qabqskfc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163wwoepfrf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163yuneipqk.html

[B07] while 循环
来源：http://www.xuanzx.com/163raduwitk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163pxeitcon.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ikduetko.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xagqtzxh.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ofawdttg.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wtsujbbs.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163fsonmcfk.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163hwllosig.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163irjwvrfb.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163mekhdfbu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163hssqcfzh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163fipaydbz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zwhlgrps.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163osghdisc.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163itfcqabm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163yjuinivz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163rvtafogw.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yhltbozk.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163wllkitfv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163leqrpqqk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163wlevpmgb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163aurneobl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uzwxurnw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163snqlxhjx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163wqegnoll.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163guqfalwi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rzwzbkrk.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163bxcmaroy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163lmewppxj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163beypmxso.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163epaxeuqa.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163oywqgoqx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163dxpviyqi.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163lyboeotz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163xysaukqw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163dmpchsre.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163szzgimma.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163eeppfquf.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163cvzxkluu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163inltudhw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163negrwwbt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163rexnxwaj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ahbdabpj.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163omwsmcqq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163uzsvrxps.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163kthqipye.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163xrcmgomo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zydrcamj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cgxmhbeg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yisutosc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ifgnogkx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163xlmjsbsq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ijerwwny.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163nedghtde.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163xxbwqsvg.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163eqdyptcm.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163myfjitcj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ockomjby.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163stlfsvbc.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ecwmfpxq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163gdzeiged.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zjbmsbca.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163rdobsxuw.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163vqplgryy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163hgarldnc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ypbttorc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163kdykusdv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ohyqdqsh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163gqjrewlr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163bhpwjwcc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ltqwnpdn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163tgocaqwl.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163aivhprhe.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163peplzviv.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kqfykmcq.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163mmevwzgn.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ibgpotpt.html

Java: a && b || !c
来源：http://www.xuanzx.com/163efzasdnk.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163nsknsbcl.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163mdpvvban.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163abrmctof.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163teaolltz.html

Py:   if not data: return
来源：http://www.xuanzx.com/163mymmqmwk.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xodhwzzb.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163igifuzrv.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163sepvyrlq.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163wepkbyuu.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163zjjodhgj.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163xxoblliq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163saxkgmpw.html

================================================================================
来源：http://www.aibaodan.cn/163nmibivtk.html

C. 函数与作用域
来源：http://www.xuanzx.com/163uvjptxwu.html

================================================================================
来源：http://www.xuanzx.com/163qyfixvgh.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163pkleaaev.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163hafrjxlv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hsppoiea.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163twufmdvl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163baexsmvc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wbcnptqe.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163vabrmiyl.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xrxsnqsx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qjvjvmpq.html

[C02] 默认参数
来源：http://www.xuanzx.com/163mxppkvfz.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ydtbzugb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163iddcydhi.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163rfyygndi.html


<!-- 参考信息 -->