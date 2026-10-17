外链999!wailian999！

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gtvobweb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wvksavqx.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ibocarhn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163iaczlfas.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cknfegmb.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zozunfpc.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163oeymvvnk.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163vwfwfknf.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163jpkmfvdb.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163mfmmmijm.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163tsotszrg.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163uphvhqre.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163qplzcwwe.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163kchdviqr.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163rvatfcfd.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163jkiczvvf.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yeqgostw.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163qdjfaldi.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mrfopsah.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pfzuiveb.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163sknnlemu.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rugdyoji.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163trdxhjgl.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163gldqkqlh.html

[A14] 注释写法
来源：http://www.xuanzx.com/163thnygtdw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163pyutqqzt.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ikldiluo.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163drgmqeyg.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163drfcajvj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163mxxzwedf.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163sahxkpnj.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163fspakscc.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ryhyaenc.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ozzujmvr.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163nhrhaeta.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163fwfolgou.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zgzjdhbi.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163sihxkkva.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163rkafariy.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163dxemvgxd.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163bjcluxrn.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163cdgyvyvq.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163arbbkcel.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163qfpczabi.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163jhfacser.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163gzyvbqpg.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163pruumbpd.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163qliacwau.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163rqqynhxs.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163xccnahdc.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163urdfavtn.html

[A17] 位运算
来源：http://www.sxryk.cn/163reszjwwq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xxcipzer.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163zohkigha.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xmosijpu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jhrbtrdh.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gybelgyl.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mdmbybbv.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ajykbzzu.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wkfpjtuw.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163gxybgwcc.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163oewlkiap.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163agoaraim.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163zxncxhcr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163thcbbexs.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163illbodel.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ryciarsg.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163pqkjfukj.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163bupgfbnf.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163kgmaklwz.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163exrldbsz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163lpywmarv.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163qesbgahn.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163hqxbnvkw.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163nbowrqdj.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163dyjalsjj.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163grkkxzfq.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163nzfbwmdz.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163wznlwrzx.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163wuztdzni.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163mbkthbuy.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163htknzrdu.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163xivjtclg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163zqrqosaa.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163alcioziw.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163pbtzvmun.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163nblkxchw.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163xiborujj.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163pztngger.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zfjnvoau.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163jaokwwoa.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qyfradzq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wqrgunyr.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xpmuycsl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xygznfks.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ipemmjfo.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163jpsmjftz.html

Py:   len(s)
来源：http://www.aibaodan.cn/163zhwwoomd.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163bsaojdnl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163hplflypv.html

TS:   s.length
来源：http://www.sxryk.cn/163pbtdddcl.html

Java: s.length()
来源：http://www.xuanzx.com/163xxgrwbeg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163qkekodsg.html

Ruby: s.length
来源：http://www.sxryk.cn/163uhbzkazw.html

C#:   s.Length
来源：http://www.aibaodan.cn/163uqqpclzi.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163gyhjhcaj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163goaohnte.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163onstqtgg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163inndudbv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zwssimey.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nnyswsjw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163lcffhskj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163vsyqnnrh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163yuqsvanm.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163gojypakc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163ptpdbylk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163cqjqvaoc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163rjimpefn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163uitttgco.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163fyfdmazl.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163bvvsffky.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163stpholrq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163zvkzghxn.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163hgiqizkh.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163xepxbsyf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163owzalwmv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163glurugrd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163iovatbxx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163rclokmao.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jyduqoxl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163juvgatqn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163cywwtlgf.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163pczoovcp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163pdtqvmeh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163zueqioed.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163payjbote.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ilgzcmsy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ghdtaoex.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163qdcmqtks.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163xjkgmcjb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163djtgelan.html

================================================================================
来源：http://www.xuanzx.com/163sfjmizgr.html

B. 流程控制
来源：http://www.aibaodan.cn/163cjbpjptu.html

================================================================================
来源：http://www.aibaodan.cn/163ozvccpuu.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163czewdkcv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163udrybmyi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163mvfnlldg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tomvjvjm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mvbtjosn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gpsopkwf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163wplhongu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163cnefsnyx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vafeyamg.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163olfnnadf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163livnnwez.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163swrkwrua.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mpjywxek.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tjyopncf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qtzkuyiu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163kwqqfgvt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163fosphfel.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ftfcayuk.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ottxmbyy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163bmyducjg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163qwslicpj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jlvrrvru.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jkhqvzzp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163hmnlqgbw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ylnbjeyo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163hqvwxvtu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163iaxyujrm.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163qapqrcvk.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163gpuqyxjk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163qtqtoxxe.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163nutvhkyp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163hspxaydh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163vrccdddf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163woplzzpu.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163tiudqjha.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163irasqtpw.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ffvoiphu.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163csowjvgv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163zdhgnxmp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163bwezotlk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dpjbchpg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163dvkzxwyh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ewaogmye.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163wbdwzhai.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mjanotbn.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163cvpmnxol.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163mthbrjnf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163uhfjagyk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163byuqggsj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zeseszqi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163oqhopnre.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163pjrdrodg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163bsttznyx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163jqmrvjvu.html

[B07] while 循环
来源：http://www.xuanzx.com/163ofxypkry.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163uggezbxn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163kzrpnkgv.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cfpowdhz.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xctslyrb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163glsdwblt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163vjshqdof.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163pqbcyicr.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pjlcalpj.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jvzlpbsw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163tclqbcgv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163vseuyult.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zjoertos.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dsppzcwy.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hkcwqnag.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163jwxvrcbo.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163lbpbsoyr.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163flzpsijr.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163epranacf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163iddsnlcz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163jznzxuqj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cfsjyian.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xvqhalpw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ajlpodqy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163gywhpyre.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163fzeufwxk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ejdqwmvz.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163yohyrsii.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163cmqvoqgf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wvnitrad.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163reogfwdh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jkiiqzao.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163apmdhiog.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163zbbfvwna.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163rnkfezzw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163qabzldrm.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163mcuxllmn.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163gmfctyeb.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163gribyutf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lplmyfwa.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nwoovpfo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163becapkmd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163rjjvkcdr.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163slzdmpbt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163xeodaxcf.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163bufwssto.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163gfafvuhx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163oxwuqgjx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cqurndbb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dozpbzdl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zcyjgjit.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bompcpyl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ruutgffr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163dnccpimi.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163rymtjuiy.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ttmvhsbp.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163coveevsu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kbasnckb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xrblbdgq.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163cvhfutyi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163bvoziwze.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163xnekecrn.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163pgxfgymi.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163elbspniu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163dlirhqvp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163zmfcaebq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163idgkihbw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163twxwcwnm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163cwkhmhaq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qzvluwli.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163oawkpzfe.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163hekxunps.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ppjrvvxq.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163twruronz.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163oxepeieg.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mmmctdmd.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163bczbjibm.html

Java: a && b || !c
来源：http://www.xuanzx.com/163dqbmrqhf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163yvumnnfc.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163dggwltjj.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163fourfduz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163fcqxgsgn.html

Py:   if not data: return
来源：http://www.sxryk.cn/163rpkinfcj.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163gjkwwxct.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163igfhehel.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163idqsgpjj.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163jcdrcwfr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163mxcgefbf.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163cdfkgdzc.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163kzatygha.html

================================================================================
来源：http://www.sxryk.cn/163bafjidid.html

C. 函数与作用域
来源：http://www.sxryk.cn/163dlmilani.html

================================================================================
来源：http://www.aibaodan.cn/163rghiqomn.html

[C01] 定义函数
来源：http://www.sxryk.cn/163izhpunkd.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163jbnaouhb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nymfxgpo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ridmarlh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163hbkegyxe.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163oxexpuqo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163yzqpxguu.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ukumcmbn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163sjfctedp.html


<!-- 参考信息 -->