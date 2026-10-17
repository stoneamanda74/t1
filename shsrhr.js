外链999!wailian999！

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qpuniohr.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163cnuliomq.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163neyiwsom.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163uthbsgmd.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163pmvdgmxi.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163rdzvbnpy.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163wqnspmgc.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163esxdxsco.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163pluibvqs.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163muhvuuya.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163effjyvnn.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163pzzzisig.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163bilfwtnc.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163npstvwtw.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163fffrixgz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163aewsxytb.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163yrrjxdmo.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163nokyynwr.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163ibhjgvqe.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163pmrbxxli.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163wjtkkftj.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163contyxxb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163wsyrgfyn.html

[A17] 位运算
来源：http://www.xuanzx.com/163dccdwzly.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pcedvbpd.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163nuiihbfn.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vmlxgbuf.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163objfrpah.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kazckelu.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cndlyddg.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ebvvxreq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163yklxcnrl.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163jfutiglg.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163lhchwcwn.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163khyduoxt.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163wuosrwrv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163fsfbkhtf.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163gcckursn.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ildilxtn.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163hxmyeile.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163myvuvcas.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163hphiyvsi.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163ietksvpg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163moegunvt.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bqogvjeb.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163jfgwvbvb.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163upaddrsm.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163nneuvaoi.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ssxfmmep.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163eyymgaaq.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163msodqnkg.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163zeiejmki.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163rtyynjlx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163pbccrqcd.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163amvjhruy.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ivuglhtl.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ogntqqac.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163rbczjuia.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ykntrqzq.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163emxahhcf.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163vqplhurw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163eajwcpno.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163tujuvoco.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163dkezvtpp.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vbksxgyh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163siqzssci.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163whoacivu.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163gedgqbya.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163rnrjkoxs.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ajdsiyiy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163usasuppi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163xhvgayhu.html

TS:   s.length
来源：http://www.sxryk.cn/163syvtfqhb.html

Java: s.length()
来源：http://www.sxryk.cn/163dsincyie.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163dpxqghbk.html

Ruby: s.length
来源：http://www.xuanzx.com/163meiyqshw.html

C#:   s.Length
来源：http://www.aibaodan.cn/163zuibyijd.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163lzhruwyh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163iophgyhb.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163gvflcdqu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lrfasljk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lwekzfjg.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zxrjnlhf.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163pjynfdsk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163enalntrw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ynnzpabi.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163qbvwkybv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163widfskuj.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ddsdluyi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163rbqxbzed.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163aeepnbnd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163tgcluxnq.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163otuluibb.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163gcfmqcrg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163kvcsvsfq.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163zeuvykrz.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163chyswwdh.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163aroifcpw.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163knoklwhd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fbqtgatt.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163lqhjszqw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163fvpzaqyq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163vdzvqmem.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163cpdfrslk.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ityiundd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163pbntqitp.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163syqevmfu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163mtxcguhq.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163utmjplhx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163rmydcrbs.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163rdmhlfpz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163jbzkdyue.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163erfodvvd.html

================================================================================
来源：http://www.aibaodan.cn/163zawietjp.html

B. 流程控制
来源：http://www.sxryk.cn/163nxdrghpb.html

================================================================================
来源：http://www.aibaodan.cn/163uezepbks.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163bduhlwnx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163hpatgcri.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163udwzaoje.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163plecmrtv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pvnfwnqe.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zmyqxvhx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163cczwsztx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163lglwhhgj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dubrdljz.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163hyampdku.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163gcydxost.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163xkemurmz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cavypfiy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163twjekhyv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tctczhmf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163norqbnhr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rekushes.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163aaberyud.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ottoszku.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163cbufxrax.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163mnrhxgdz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qzfumusu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rfpvqjnr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ybqodlly.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qahlzciq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163nwjhiyzs.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163amaebqmi.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163slkfnqty.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163zxsldwkl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163zhohgegn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163qaxvdits.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mfrbtdkc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163lbedppkj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163rggjshco.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163toidglfd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163scouexvv.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ffvrnczb.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163javiwtsv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ilyhstef.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163mfdfgzyd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163myqslrhl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163lpqqylqi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ufnahovc.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163sahwusct.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163kllkqfcf.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163orngkivh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163esvaikge.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163kuudvwmx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ysrlxure.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163cqdsaxjk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163zbznqgpg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ejstjrjf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ontdycrg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163srnxldov.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ivzbwrmw.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163azxcfqmc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163wrodqrql.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uebflrdg.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jcrpjmvc.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qbrkzjwi.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163xbthnurs.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163vqiqqyos.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163owkbljqc.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163jdfzbwvc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163hamtfwgv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163mesyabtu.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lgcimtrg.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dyzmcure.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pzdumdmw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163bodynwjj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ajfeogdg.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zlchqrgs.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163wenznzfk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163pyzqafjq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163xgnppnhv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mowsxmeu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oyoorjil.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wqifzfwi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163jawiahpr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hurefacg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bfimcrys.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163bqobypts.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163mebwgdlg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163qrvhlqlz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163axbfcgph.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163rnldsreb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163dwlzctih.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163jtxvvoke.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163qdwwnxgy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163lydzxucl.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163nzcudkni.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163etdowuqv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163yqjrwmeu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163deblmpve.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fvyfrvuw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163tdmcewru.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kheehzno.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163qgabvzms.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163rufktica.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163lmyomgvw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163frespaxb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163sbitymwq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163orxjwosh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kmrxpcbi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163afybmcda.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163oiifnjyf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163oopatdoa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ezpgiapi.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163tfipmozj.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ctpjpjku.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163qtpfxyof.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xazhjkbp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nwfzjucp.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163tbgvafrs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163cmjinjvw.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163xndzfikt.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163pdgdpzuc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163lhogqtaf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tiunaozg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163szztxiwb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vilbcpbo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rmmjfttp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163myoglltk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163rdqjrqju.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163zfllzezv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163klwucodo.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ejxfrxmv.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163pxrwlaxk.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163uhhlkwha.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163abydtgsq.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163bvccfgxk.html

Java: a && b || !c
来源：http://www.sxryk.cn/163mzqhvror.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163rvwpblnw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163gpfyqwln.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163bbaayxil.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163tzygblvo.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ctyudkhy.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163gqkzanzs.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163rjnxccix.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ckzuodyl.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163txiobvht.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163asagmtpq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163priyyqwd.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163lyfgxaek.html

================================================================================
来源：http://www.xuanzx.com/163snfifhlg.html

C. 函数与作用域
来源：http://www.sxryk.cn/163wojyuqqd.html

================================================================================
来源：http://www.xuanzx.com/163yucklqms.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163leywdkwa.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vccnicnp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bqtgeslv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163mdpwankv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163iwhsxfir.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163izhsdxeq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163hhpifbjy.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163geeghlpo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163abokbzdt.html

[C02] 默认参数
来源：http://www.xuanzx.com/163joecywwh.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163fdiocrow.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163sysogtnb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163vjnnzjoi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163jlgvelrk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163cuaszkiq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163xecmzqfq.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163uzwqklso.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hoxrgyhn.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ndqpjwxm.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163aurcepgv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163uzmzrizk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163issvtofi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163auxyezzn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ivxwbeoe.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163uukqlgib.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163yejkywlr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163hvhitvji.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ivhmcucq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163whevwnui.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163crbfaxbb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163fmenmqyd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ysotbfog.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hnvtxnji.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163jmwawlgv.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163alquhpaj.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ugsdsbxj.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jhltjbym.html


<!-- 参考信息 -->