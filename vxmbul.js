外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ufrehgnu.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163hlgpegvh.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163unjqnobk.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163undbjicc.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163ntxstdvt.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163xwyqphmb.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163sjgsmbzv.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163otetctpa.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rcdbxpiu.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fikgpdqh.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jpcyfags.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163pznvkitn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mrirmllr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bpkthmkd.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163hhynkjqf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163fbypvxqy.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163fuqsmqnv.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ytuwnbuw.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163yetdsxfa.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163zmobmzrb.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163pangsetf.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163wdvlrngk.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163dkxutfpv.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163taqwiwzm.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mznkdxlc.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163admlnpfn.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xhllovar.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jkupfoyt.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163afbdoxxa.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qulqrvmo.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163mrkymwbx.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163aelzdipv.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163mifyjkye.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163khkhvgnc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163joiatnss.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163sycmjpgc.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wdacrizj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163wnygkmkp.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qhrajvud.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163jsqdkrja.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nnlltiic.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ptrttaez.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163yamjpkye.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163miymedcw.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163kamanzik.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163oywizkyl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163xjluicgb.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163pgedcorv.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163ititogxo.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163hhrfkllc.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163qxqfknxj.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163nutgreig.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163ksulgewq.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163xqrexybq.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163vtphogli.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163jfjsyjnu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163mfygoyfl.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163cdytyrib.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163eovoldmo.html

[A17] 位运算
来源：http://www.sxryk.cn/163tagijkpq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gfsrgodm.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163rewcxnrs.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pcggeqbd.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rpecfihd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gkvimrcn.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pqtmropm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vzkgifkx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pmazdsud.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163zdmwrtuo.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163inuptvrh.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163gunjzulk.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163hjagzqfa.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ilpxpezy.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163ngbacycp.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163htudtqqr.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163rumsdiza.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163yjiemkqt.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163wjfldvgd.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163rrsqkqnt.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163xzthqiid.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ugznhutv.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163mkemdtal.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163jdvotcab.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163platriqd.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163izoigrfa.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163lmmzhxbr.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ytybnkbb.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163zydbuhxf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163jdwbptpt.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163gxblzazp.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163sguzdkhs.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163utsgjujs.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163pohehogt.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ixsrqyln.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163fyydhvug.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163wbzjuwcd.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163hkogqxsm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163mvyzofxk.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163smybeobh.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ywslxnow.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jokbbmhx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163waihfocz.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ytpnides.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163gkitnxzs.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163jpvhaxed.html

Py:   len(s)
来源：http://www.xuanzx.com/163wcrfnphk.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163kclccxsu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163hkkhudgs.html

TS:   s.length
来源：http://www.sxryk.cn/163hrmtaosq.html

Java: s.length()
来源：http://www.sxryk.cn/163hvboavhj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163zcapovju.html

Ruby: s.length
来源：http://www.aibaodan.cn/163udithudu.html

C#:   s.Length
来源：http://www.xuanzx.com/163hculgiqx.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163doqbheuj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163zuefijos.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163sjnxvqqz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163diyawqpo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hlyxrlmb.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163idplvjtz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163jrzunfqw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163qrtcclbm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163sbouoett.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163xyagxgov.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163dbqbzenm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163smgmevjv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163gboafbmj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163innonboy.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ubdychdj.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163akycmboq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163bwryjpxb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163fcewpbyn.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163legabgrs.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ozolrjbn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163ebkqosgw.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vpsuugdr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163skhmmffk.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163xoydtejh.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163qykqyajc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163psgybezd.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163zlgntwmi.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163wyyvlffs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163dtqcxusw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vojrjnel.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163liewmfec.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163tndimucw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163xhqpwwyp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163iajtnrsc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163cdttabxi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ehfsrodd.html

================================================================================
来源：http://www.xuanzx.com/163rvdflhyn.html

B. 流程控制
来源：http://www.xuanzx.com/163ovoynvwl.html

================================================================================
来源：http://www.sxryk.cn/163drmlcesi.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163jzvkxyzx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163zmwnwooy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163bepmqasm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163uqjuevhe.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rxswppgo.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mnxcucrj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163bnynfhqm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rprhlnir.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hqclhnqj.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163tjjifemp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163xodjpejy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163rlcdyvlt.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163atnhhtsv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lbtthejx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aiszvdhx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163nqptnoqc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ifvlmagc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dqbwgflr.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163kqkspxjy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163icuhmqer.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ajldhavp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163cxmmvkgy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163obpifuqw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163osibnmlm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163fyycbxao.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163tfnplqzj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163wbpenbzj.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163oevxwrnt.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163havvqldm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ioznotvk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xcbmpgow.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bwfdjrqq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163cuotrebr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163wqisyxgl.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ytirqids.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163fyuotpqa.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163fwhkggvn.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163dyqlvvhi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163nzvzsfqp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163pqeywkpb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163pyvdoblx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163xxrnioaa.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163kfbbtuqg.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ctowpoib.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163kodnzjjo.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163hnjbioex.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163cpmqfsoq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163pcclbvrg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163smizgfek.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ggtaktnv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163fouhmecs.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163cjziktno.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163dkfihcaj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163hbdqcnle.html

[B07] while 循环
来源：http://www.sxryk.cn/163rbqlykxp.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xenciqas.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163xeybirsr.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tkvamsxq.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163upjxnupe.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wlgaglan.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163eaubvsum.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163bkrppjjj.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pdhyabre.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ixgmxtan.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163fvrxwxjl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ueeasmry.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kgwekbtl.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fbimrqhd.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gryfophe.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163selmlmts.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ndwarlmu.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zkdqqktp.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163yrhvcunl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163iaprqszz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163kvgyhovc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163babyhmaw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nediahqa.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lcqvbnum.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163fwhszqdk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163htlpgmqh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oljtdrry.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163tckutglj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163unnjnnmv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163mfjonrhc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163afmehppo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163rpcaasrp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xjxagwuc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163pbonmtaz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163tubnifrg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163dhtxrbhz.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163nzpyleij.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163zwlpkozk.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163bktxcbma.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ynbindda.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163cpmvqics.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163tnokirnr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163fmwslwnj.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ogcuisuk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163bzgxetqq.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163lzgxesso.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163yvbmxstb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163txvcsdro.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bouajirj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163murflcob.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nuikmrry.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163fpyhqizn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163bvpypokx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ecxvqdwv.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163sufwaixs.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dsjixbpv.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163bojxbswt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163qhmonoqy.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ysldcqck.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163gdjohtcx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163owewlepg.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ktmlxvep.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163unaqwlzg.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163xsgxbyfb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163qnhasifx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163bqqpqmia.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ypfmzflc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fanvkdru.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163orlvteqe.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kymlzqff.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163nfiobihs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163pevivhdj.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ahijtwio.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163tnzigufh.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163zaohhyln.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163csbwpjhg.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163hchynedt.html

Java: a && b || !c
来源：http://www.sxryk.cn/163woygqlsl.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163rbvforqq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dyuwmffs.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163vqiaobyc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163wmluhpyv.html

Py:   if not data: return
来源：http://www.sxryk.cn/163seqlviaa.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163nscbrnda.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ziprpsyy.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163bocqjuir.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163lvgffmab.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163daapefgn.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163wvcangfb.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ierbqdvq.html

================================================================================
来源：http://www.sxryk.cn/163nmntprrg.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163lxpkdnno.html

================================================================================
来源：http://www.sxryk.cn/163huenpfzf.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163rhhytlzs.html


<!-- 参考信息 -->