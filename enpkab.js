外链999!wailian999！

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163buplhenu.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163tglhfftw.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163evxiqkda.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zcbtrcdr.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dwiktnkq.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163snuwpjml.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163atmwyxdn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163oghoeijm.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dacgszao.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163meppdkpx.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163iabmnmbz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163jomzxwnk.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163zonsxdoz.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ukxplecm.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163flvugagc.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163lqmjnosk.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163sjfbrtjm.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163evbrarkn.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163dymqwplh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163kblkvnrh.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vfdlebem.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163mlcnljsv.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cowosbwf.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wnsypfpy.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163kluuximx.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hggqhovg.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163knpqcyjc.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163eobsgekr.html

[A14] 注释写法
来源：http://www.xuanzx.com/163yktzpwtl.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163gvzelokw.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hwkgnioq.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xviapsns.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kieyzuzl.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163mtkbcpzp.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163uqvwsdva.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163xahrmcgx.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163keqvahrg.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163ftztattl.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163ywotqcgb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163ehdvaqek.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163shxnnlqo.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163hvvxfjts.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163pudfjkuh.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163ulftgosr.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163jrpjqkyf.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ichhgkim.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163nomxxuid.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163lasxvhqk.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163pvtkbswq.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163ayiioqsp.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163iyzgnzee.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163tjnsuexh.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163rsjvetuh.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163alzsyocb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163libmkzld.html

[A17] 位运算
来源：http://www.xuanzx.com/163ijljwstr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163whvnzbvt.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163bokimddp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wltrimfl.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kezqgfyf.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163gxbjcnji.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zqxnmxad.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qlsupyud.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163apqplyun.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163oqvhactx.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163gnqxleky.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163itvgjklm.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163wckouexq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163iuitblna.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163czltzkgl.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163utuzcajr.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163pidufojm.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163nwivmzed.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163djqexbji.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163uhiqfhfv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163wkzgmhdx.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163gkoldned.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163kewqjxlq.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163zlkkqswi.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163dkebgifj.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163uezwzifw.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ffuvjpwp.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163qhkncrrs.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163xmczmvqp.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163wktolvlz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163uzmyyycb.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163pgychkqg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163nwvdjvxj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ixhmyxoo.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ltsxsgdb.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163opnqvocu.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163qnjmvsvz.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163hguxjmpf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163woildfrl.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163taomffdj.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163vzyrjfoi.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163crjmpnts.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tydhsruo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tycazrfn.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163bxjhqtry.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163syfrjlug.html

Py:   len(s)
来源：http://www.xuanzx.com/163rzewtret.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163dnufdosi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163cfnwhyvq.html

TS:   s.length
来源：http://www.xuanzx.com/163nsjikwuz.html

Java: s.length()
来源：http://www.sxryk.cn/163gdqzwomd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163vaqhxpss.html

Ruby: s.length
来源：http://www.aibaodan.cn/163wzlonsak.html

C#:   s.Length
来源：http://www.sxryk.cn/163hxrovfdu.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163brsmmfeh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163esosilbn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163olwodqnx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ltwlpylq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163fzaslfpe.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ukuznvcr.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163vryaassv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163goprmajk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163asrqjrtw.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163jdjkskoy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163lyzbtcei.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163uknglwzt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wczxtgdv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dkxrlhnz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163tgsevmhq.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163lbllyrkg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163gkbtlhuf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163tkqeyruz.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163iyhcoupv.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163kfuotwla.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163xvmybmsl.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ehnuxcgp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163bqdsxhse.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163jmjfkrcd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163gldqpflk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163xuxxgunn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163bwzjlxnv.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163jdvoykhr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163indbvkwr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163vwazhjtt.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163hczxdedw.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163pzsrmens.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163asegldxk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163kqppxlsk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163umifooji.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163hwkruijo.html

================================================================================
来源：http://www.xuanzx.com/163shpmndkd.html

B. 流程控制
来源：http://www.aibaodan.cn/163dvcafppm.html

================================================================================
来源：http://www.xuanzx.com/163zcfiqmzc.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163tbeibjch.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ktkqttcg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163aagtdwob.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163olaotwpj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163brqwjkup.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xoktfxvw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163utywwrkv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163hchamebv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nbygnbjn.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163esqvdobn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163pqkhtyaw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163gjdycbqh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fytlkbog.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zusqiqur.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163djzhkmep.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ssirwdlg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163vjjhbzld.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xezzszmr.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163mqelqgil.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163btixuqml.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ztltzeyv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ueivhllc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bhbmrzfb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163supanjph.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163juwxafki.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ueaqaaph.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ukdbhvdv.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163mmwcjliq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163irysjtab.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163lmjeevxz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163cuwdqori.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163nykjykms.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163sbtvxvww.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ksdqmfkj.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163egqnmaea.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163hikvulfh.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163kbptkgfc.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ekkxiigp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163jynittjl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163sdwdhfqn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163upvbzynr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163apzuzqqz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163auygdltz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163mdpisjzl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163taqaqecu.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163tmakwvrp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163xmebjkfr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163hcuhegra.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mdxzflxe.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lzweziui.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ebdojhon.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163nfcqcrpx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163abxixrcq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163pqvxmovm.html

[B07] while 循环
来源：http://www.sxryk.cn/163djwgobkp.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163wizkvuiv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163otmcqspv.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mlxgvbyn.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163anxcwise.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bmymlacw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163cqxrriwt.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163gfrtwtgg.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dhzimfyz.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163yymbjrjm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163uhoiooxw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163mhmxzdkv.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xnmthone.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ycherphp.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sydpuumg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163kytvtynf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163oerfddgz.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rmbnjsnc.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163aofvngex.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163zjnzsbzt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163fndqjaqf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wdpifvne.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rwgwntsd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cdxqssur.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163oajklllf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163luafzujn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163spziefif.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163mzzmzgwl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163hixjzbew.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ulnkxoge.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163dnpaifew.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163sqzdlzuj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ffiyqhnb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163hgnsbjug.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163mnskfzhl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163jadjeixr.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163rupyypkz.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163flfdfylk.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ztagpmkq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wnvtkcsq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hemnzhkx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163vtxtqjde.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163xokbwriw.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163gzgkexkf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163iricdect.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163tazwynkg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163mkrbfmyr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163bejaeapy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gnyhwkln.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mgxvfboh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xktkddaf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163izbuewmi.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163zfybpjps.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163lvqarhyw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163dzazolph.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163tuaejjkg.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163gcenbelf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163yzfinfwx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163oxnjgnhi.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163wbolusms.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163csqqotak.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163hlmbpmvz.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163bxgjynnl.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163aghbuywi.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163fsumyeou.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163srtgwyrf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ufdpjkxp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163evfsyjcu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163olgrsbgg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163pdiuzfsa.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163nhaapbpo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163nzypsucy.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163wibljtax.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163puhqmbrx.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163lkvdhsgv.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163gvgpsizl.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163eyjenjzi.html

Java: a && b || !c
来源：http://www.xuanzx.com/163qdkfvhar.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163imaaknbv.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fvjvkfbv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163pcvdxirw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163zrozrzxo.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163petdotus.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163aqhaqahw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163nequuodp.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163fkiyxydb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163uzbejaot.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163puxqbueq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163woruovvd.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163nhgbljvb.html

================================================================================
来源：http://www.sxryk.cn/163oxrfcdbi.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qyfbpmrl.html

================================================================================
来源：http://www.aibaodan.cn/163cuoduiyk.html

[C01] 定义函数
来源：http://www.sxryk.cn/163zhteemuh.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ysllwrps.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zjujiluj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163nomrsgro.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kkzrygru.html


<!-- 参考信息 -->