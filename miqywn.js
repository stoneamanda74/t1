外链999!wailian999！

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163geefanxu.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163peawnbas.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163tfdgjedw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163cqoqemkr.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163badhlbcv.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163yuczevxd.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mpjpapti.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fmbvlqny.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163xfeuxsky.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163abtagdyo.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163zahaefli.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hdgpbagr.html

[A14] 注释写法
来源：http://www.xuanzx.com/163sgxgmpjk.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163xxvwazwf.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qjxvwgzt.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ajcodpff.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dmuuwjpn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163bluxnmqb.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rarqxxpp.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163arxwdlyv.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xqgbtjhl.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163xmubbhkz.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163uzqlxwrq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163tdccljfw.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163yssvmjml.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hdnfksdo.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163lehgwaya.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163dwxjkkka.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163wbolqrva.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163unesnxkv.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163ewnkcrnj.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163cpgzxytf.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163anheojih.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163laiohhnu.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ulibqqwk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163nzwgxufi.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163vpyjcijs.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163ewxdvmzv.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163kzlcxjzi.html

[A17] 位运算
来源：http://www.xuanzx.com/163qptixxnf.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163egcbhbal.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163dlbfmmxc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lhaklaml.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163lakxxjso.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bhjyiwvu.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163phsoiemx.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rqwdknvr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bvsbdxrr.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163efdsrjfp.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163bbgzykcm.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163fohdblvf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163cuvcxnbv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163czizqdij.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163plvgpyly.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163hjmbzeia.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ovonulnw.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163lfjjhqpg.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163lyvkbwex.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163xrcejmmj.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163shdoferr.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163utwhtpfr.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163dcvprsjn.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163hwkfauop.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163gzjyoszf.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163gccfxthe.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163sstrrhbi.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163rgcpaatj.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163uibxvqmv.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163xwkgtyeg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163ixmdivnf.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163zmcelbyc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163rghbddkx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163wsdtjmiv.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163oyvhhrkd.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163npvwvsji.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163jrmsjwic.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163dijygafe.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kvdwmrbn.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163vrdpvwav.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163dsbmidor.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hinikkyu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zoepcjht.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gcziuytc.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163wjfmbiwe.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163ambxmvpa.html

Py:   len(s)
来源：http://www.aibaodan.cn/163yuqelnsb.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163tdhulazn.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163nydvgmgp.html

TS:   s.length
来源：http://www.xuanzx.com/163gdabdrrt.html

Java: s.length()
来源：http://www.xuanzx.com/163njlwnhmb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163vqtwswyl.html

Ruby: s.length
来源：http://www.xuanzx.com/163zpugtbfd.html

C#:   s.Length
来源：http://www.sxryk.cn/163ugdayovc.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163thcdpovs.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163emtuyson.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163dfrzrbuv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ibhqqmfg.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163mhwcrbtm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163sgybisfn.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163tyabitrm.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163dufquruj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163icmybvuh.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163kurxyboe.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163cuipajpt.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163sawbzjje.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163clepzyoq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163bjyijjkc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hwadxyjr.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ctwysktc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163uphdnjvw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163dhaaddgm.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163cjavlhjj.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163fusvhwyo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163zdfjpvgf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163rzrwefga.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163oltrfqkd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163hpbbcduu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wfruhjgi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163eliyoscn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163pyttjpwu.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163qofjbgja.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163wstszqzh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163curruyof.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163efafgxoq.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163hcttjwaw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163hnkltyyi.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ybpurgrb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163mynpbfnu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163jtwyshsd.html

================================================================================
来源：http://www.sxryk.cn/163iydpozyz.html

B. 流程控制
来源：http://www.xuanzx.com/163ptjmhybl.html

================================================================================
来源：http://www.xuanzx.com/163zxajmxqp.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163mpymbovd.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163fumvyngu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163kqfhchma.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yccygeiu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kuhjdsvr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tlaswsfl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163czwjwrao.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163rkifopry.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hsxsnmjm.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163oqpqaoqp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163ihojydax.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163jzaxwioe.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lsexdevf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163acbdnvph.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dugnaoyo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163nytaonzm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163hwbcvzis.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163guwwqsez.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163lefnmdiq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163tzjehced.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ymgargwx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163slyancck.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163dyowknht.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163xeqrrxkf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163jkcwcktj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163evxmbiie.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163vljhwzai.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ctmgehwf.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163pyuumcrv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163cnoohxbz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tenngypq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zncclwwn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163uthbxrzs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163spcfaefm.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163jlxfwume.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163fkpixhyi.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163vnbgsyjd.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163vxfqckyp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163dbykjxja.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163japqlutt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ybvaserj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163stwanirn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163mblyfxas.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ecnhoorm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163jxdvyiyr.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163slmpalgq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163qgoevqez.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163bthjicec.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ediivszb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163sitmvwjb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163lkjwmjnm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163knhdptfy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163zxornykh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163shtqucyq.html

[B07] while 循环
来源：http://www.xuanzx.com/163zspoxwwk.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ndkktcwf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163crgraohv.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163udfuxuia.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hpraojds.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qqbpockn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163mmudmfak.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163vztztjmu.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jgetdabq.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jagbiouv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wxpzsocn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163pehgraho.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163saycnvhn.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mlgtpgmk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dcgkhvxi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ezdlmrao.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163lbwgitqm.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163szcgywvc.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163lbbivfdp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163yfgrtjvb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163wimulfwf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163unhalxny.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zmcnpjgu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mbzkxead.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163gukyikkr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163sbztyeba.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vhyybmnk.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163vlflquhv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163qeakgmcl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163xubuxerp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ehlprybd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ahlgfdts.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163hcjscwyb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163twuzqvok.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163hpcfrdut.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163mhgamwnj.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163lkagilmk.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163sulujhfy.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163uwerftje.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163guwaikbq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163yeoglpbs.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163wvhnwlgk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163yqkrarlz.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163kaaigiax.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163cudpnojk.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ibllwjxg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163fispzwiw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163pzojbykq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sdpreuvc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tepsuhzb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nagglzfo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163qgrkszib.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163qgwotfum.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163apcqdexk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163xgjqacqj.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163jhtpdxyh.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163coaoswap.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163dbukddhs.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163bkzxwwzi.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163qvzyuoqq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163burdukal.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163fzyoukeo.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163sdtckuea.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163iokrnawq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163nbzhdvgl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ukmnasrx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163yqeewzde.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gvdjalgh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163blhdkiay.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163yltodele.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163cnbjzpgq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163gcfnqiow.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163wrnlqtql.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163qrjlkcoo.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163jilwhygz.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163cpoagomu.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ljhpkazr.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jfdgarol.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163dfamxcuk.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163brgfqsit.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xyefmgmm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163uonqipda.html

Py:   if not data: return
来源：http://www.xuanzx.com/163bnoagjxg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163jdywjvhq.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163hvvadlbg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163sxrbicem.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163dmnqbabx.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163cfktnhmk.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163pjnneprh.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163phtehcin.html

================================================================================
来源：http://www.aibaodan.cn/163evmcsseb.html

C. 函数与作用域
来源：http://www.sxryk.cn/163yzkbsphh.html

================================================================================
来源：http://www.sxryk.cn/163cqbqkgot.html

[C01] 定义函数
来源：http://www.xuanzx.com/163clsmfmif.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163dxtjlpdn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163szcolevm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163evgyjszn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jlwjvgfp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163umplrlbl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163yucaqliw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163irkhltwy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eusgqjgx.html

[C02] 默认参数
来源：http://www.sxryk.cn/163puupbcpo.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163zzazgcai.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163wqvebgtw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163tzcfyllf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163sbolugtd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163idluirqp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163tcspaoxo.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163flhjkims.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163laesnekx.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163uxrcnxgj.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163kroqiinz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163kwjklkvw.html


<!-- 参考信息 -->