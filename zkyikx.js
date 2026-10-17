外链999!wailian999！

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163qqixjuah.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163nkzffxya.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163dmumfwhi.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163jiqlqhze.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jiusowmw.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163piugsglt.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163puhmyysi.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jmupypyc.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163lhqcisbq.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ghjhpbtp.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163qujigiwp.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jojdxved.html

[A14] 注释写法
来源：http://www.sxryk.cn/163kzapwdze.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163wafxyvpx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163mmcpbsbm.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163evyrppmz.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wnfkxzyv.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163cnrdzkez.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ujktrtba.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163lziyvmxj.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163uhccajzm.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163ipgoosfp.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163txfsnphc.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163badeeqov.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163gifqgfli.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163zqtxsuso.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163qfbcpiai.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163cbkumsgg.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163jtthjqjp.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163rvudpadz.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163lebmkprb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163vqnyxuzr.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163czvyktjg.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163atotpgfl.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163qrliishb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163bupddjkz.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163zuhoyuoc.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163oemmljtb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163tujorbit.html

[A17] 位运算
来源：http://www.aibaodan.cn/163kqbwzwba.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nwfjmjpk.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163qqklycgy.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163omyibxrt.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163stqflwuz.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163grkjeqiy.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zsqakxbt.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163blargyzg.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wmimzund.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163ujcwbdrf.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163coqwpgpc.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163lifwdgws.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163xemvteyn.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163tjbyozdv.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163euczsxud.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163yokplaxe.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163kzmixblb.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163jejfezvp.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163fvdaopds.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163bzhfihmu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163euzndtqc.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163jnlzgjaa.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163tqqfkrkx.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163wnjncrjx.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163xijyonzl.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163oceebebv.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163tanhsvqa.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163ltnxhuia.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rcdbviov.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163dpxzixyw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163haikddcp.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163baurdtko.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163lfclcexg.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163yaejmfvl.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163oyunpnur.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163zrijzyzd.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163uknkuzjz.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163jckekphc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pzttdubw.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163muuoljkz.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163nzcioeds.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dlpwbbne.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zernrubh.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163knktqqpa.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163gpcqlqrz.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163vnkqjsdp.html

Py:   len(s)
来源：http://www.xuanzx.com/163rsohxowy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163mgzqkzhi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163knkokmkc.html

TS:   s.length
来源：http://www.aibaodan.cn/163yjmjhnof.html

Java: s.length()
来源：http://www.sxryk.cn/163yfrbjaaq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163fjcfazfc.html

Ruby: s.length
来源：http://www.xuanzx.com/163aqjoxape.html

C#:   s.Length
来源：http://www.aibaodan.cn/163wjfvfoky.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163okkaiqzx.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ejlrtfwi.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163cbtymdjs.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163rqvgechk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ppdlwnbt.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wnbpqawe.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ofhqshpd.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163xvpxhjvy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163bcqzhwpm.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163mjatdcjy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163sbtuksjw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163qnbipdxn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qpvkgesf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163cbcyxdrv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163gudqyypl.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163idjaxaqm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163pjtjiqxn.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163yrpqillr.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163tgujvrbl.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163hwoqbofu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163vqmjqeyr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ijlbswqm.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163doyamgmi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163mwuomson.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163syidbnad.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163llcngdxg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163wszvglec.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163rikdlfdd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163rubaiyyw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ebobkpbb.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163enxbbbkc.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163iyqzjuqb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163swqudnbf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163tgfokwzl.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163gxpxtnlp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163dwpmtruy.html

================================================================================
来源：http://www.sxryk.cn/163uovqhwhh.html

B. 流程控制
来源：http://www.xuanzx.com/163tdfemzuk.html

================================================================================
来源：http://www.xuanzx.com/163lgblbasx.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163gmebhwvi.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163mbzmfkbg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ccddwthq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zykknpbl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ziglxilh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rycknhpb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163zhczoxcq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163deqeqakr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xmxavseg.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163jtiwkcsz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163gzdfsayk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ciquxhxy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163awkxxbgu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gvkgxoyr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ajrfpman.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163yzymulxw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163khjhsruj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163crosayki.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163valzvena.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163rortlnuv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163opgjfocq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hwqtoyrz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163hhweaqvo.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163vsrdlgom.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ccvcftjt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163vjofyfxm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163sfezhohe.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163kzlryyhr.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163vwwtwxgd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mjsykhqx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xbmpsgbe.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163slyhdonx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163sbamhxoo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163siforsxl.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163hcsaivou.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163insekzvk.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163zleiyfkw.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163yxgdcykl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163uphvbbsg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163etqpmbmu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163oylluwfh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163scfgwmok.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ozonfqzg.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163unszqjbu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ixkhnvjo.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163fvilamcf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163mgqrxpti.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163pdfibvzg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163quofgcqm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163eqtyhahj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163uaaikiax.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163zbxdigkb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163iqehnfmx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163dqthihcm.html

[B07] while 循环
来源：http://www.sxryk.cn/163tfylxpng.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mfoteuon.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163vhvptjwp.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qbnpsruk.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kueyzrgr.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hdorfpym.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163qlqziywx.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163qomdycvv.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163iliygprc.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163zirmsvkd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163bkakjask.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163bojuivrg.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hqnbotaz.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fyprrunn.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ckqprlwm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163gqrdwohe.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163mpiajyka.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ijxfeobl.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163gfoxrjdu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163somxpmah.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163xszizgge.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rbqyxrih.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bvfiuxox.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163clohsddk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163gcnzcpov.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163mthbmuid.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163goqwyvlz.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163rtuheida.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163qmmvlztk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163kgxhotsu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163fqkllpph.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163nucthbvx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ertvjwfp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163fsrbcpae.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163zokwedwz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163tvtznjif.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163vgcrhepk.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163epgiwolo.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163iyfeypco.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bgkacmlz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163keydzwlm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163nxfzyttz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163jbmaxzlj.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163xnoixpkc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ifibbogd.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163bmpqnlfu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jrjwovdq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163rumewfwr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pkijdygf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fibegdge.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ozpzchod.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163qobbvzcy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163hsxohnlf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163stbjoayz.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163fpxmvlkk.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163vpydelut.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163cchhbfey.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xvtjdhiv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bepjtxlf.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ugugnstd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163xqonsnlf.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163mhvjpmri.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dyhnhywe.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163llvecppm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163fjgrcjka.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163jjyuybns.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fkrovwuj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cfuwpjeb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163nzxqjgbv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163mxwuotip.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163gpvuqusq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ivijjgah.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163xxtyktgd.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163cvfisufh.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163mtromrii.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163zszwualv.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163uuraagxo.html

Java: a && b || !c
来源：http://www.xuanzx.com/163yoosidpx.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zqkycrwl.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163vdsijown.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163kqmnvwtr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163pqyftoqf.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ouuplphg.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163nttltjws.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163wkesnkwq.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163eswyofvh.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163wwqxvmmf.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163jfxophat.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163yewhlirp.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ndgiaqin.html

================================================================================
来源：http://www.sxryk.cn/163gxidgjau.html

C. 函数与作用域
来源：http://www.xuanzx.com/163piipnach.html

================================================================================
来源：http://www.xuanzx.com/163caroivdf.html

[C01] 定义函数
来源：http://www.xuanzx.com/163deacavrh.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163skeztsed.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163uqjejwku.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ujoqpxfs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163uclsyhwb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zufcvcyi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163hkjlmwgl.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163lipfayxg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qemuuznb.html

[C02] 默认参数
来源：http://www.sxryk.cn/163louzyops.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163frqwyfwi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163wkcsnial.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163lbogfwyn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163irnpdihr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163bjzxltpa.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163hzvmuggg.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ujhcutaq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163yyzskkln.html

[C03] 可变参数
来源：http://www.xuanzx.com/163kkmcxxdv.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163zuikhfrl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163bslrxxsz.html


<!-- 参考信息 -->