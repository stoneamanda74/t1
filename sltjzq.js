外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nxctyyvw.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163lhhqmled.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163wnstojwh.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163jpvjwiln.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ahsjxbww.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163hlfgebzs.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163uoctzzve.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163sgbrxkjg.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163uhdfqndh.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163gxybwfpb.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163kezpixwt.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163kjjztqen.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ibtxhdpg.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163sziylhjk.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163qgjbgpou.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163uzvqlsmh.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163rdyighkn.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ivefodwb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163fsylgqjy.html

[A17] 位运算
来源：http://www.sxryk.cn/163iyrxlogr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cvwmenko.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163rcpaexva.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pbrqghms.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163twqnorut.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kxzrzcyj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qwaguqhm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bhbrqmvv.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nzwfwllc.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163vawivkdf.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163gbwtjzak.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163lcrtsmed.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163suenajlw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163cityfjnq.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163ktdkzvgx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163aplehhzm.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163soxyiggo.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163cczxyqgi.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163uoaagntj.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163cvfedgpu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163wgvgexuh.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163yphfzzxr.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ibagkeha.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163eyosjymj.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163kschckjj.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163vjdzhbip.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163djylrpvy.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163dnansfvy.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163yaschejc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163gcifduqc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163sqrdxhjs.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163vtkohkzp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163jbryshcr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163yuildioe.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163kxwerdzj.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163dzaukftt.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163nnflrxve.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163nsairrym.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163frmhbsqy.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ropevgfm.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163uofixxxw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uaxmdvrn.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ouokyldm.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ppsnkbtz.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163kmqjmiqh.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163vavneeir.html

Py:   len(s)
来源：http://www.xuanzx.com/163fnzihzrf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163dqthwwrn.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163fswwabns.html

TS:   s.length
来源：http://www.sxryk.cn/163bvknxjdx.html

Java: s.length()
来源：http://www.sxryk.cn/163ooynkmnp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163nrjskmep.html

Ruby: s.length
来源：http://www.aibaodan.cn/163aypxztfz.html

C#:   s.Length
来源：http://www.xuanzx.com/163vbvalytv.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163qdwolosa.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163mviwipht.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163bflylvid.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lpxfhtuq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zvhrdmlf.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nzzxuxah.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163lkgkolal.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163dzmntlgu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163htdeecmv.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163qyyjdyga.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163silnlfgl.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163wwprzryt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xufuhjqu.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163njzkxxyt.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163toqpxneq.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163cixhacie.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163gsllcfkk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163lhmcykzr.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163eqwjwqry.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163moxxxgkd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163gsnybeqp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zurbcjya.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163gooyvaoe.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163phnadayz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wetayslq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163gapefzfu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163eohhtaoi.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163dyveyjkx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163rswhuguj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163syyhjkdn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163rzvvtwyv.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ljuwrsek.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163psrfblsp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163obkjsxis.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163swnhlwml.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163ddsxcnfu.html

================================================================================
来源：http://www.xuanzx.com/163hcrfrbhl.html

B. 流程控制
来源：http://www.aibaodan.cn/163exkpdboo.html

================================================================================
来源：http://www.xuanzx.com/163lzbmlifd.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163xdqnckpg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jokjavpd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163twpiqcui.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dhpryhsy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ojrlhtnk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kulcvxkq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163rsgyxzjt.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163asyqrjzr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vvgizivj.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163nytbvdae.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163doykarku.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ppivzqqp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qrfobhhg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ncgozswj.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163eylhfzdc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163daidbwkf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163zdgtditd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jcsujppw.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163lhutbonh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ufrljfxq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163yeydumrk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163tvfrngye.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163wfzppdlc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163zbcbqwxh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ovsuceet.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163wfcbycul.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163cpsqgbjn.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163lujbycbg.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163xfqantbj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ppexkylv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163camauild.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163myuhpmol.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163zungqhif.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163dnjvtgvj.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163zecmqfuc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163uhjderct.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163xzmbmcks.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163zkfhrnwi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163agkpiwvn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163fxwqmbee.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163cbfniaqb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163cwfsykaa.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ewqlqdwh.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163vlodwctm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163rfrxlmny.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163widqqtjl.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163orqtjeuj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163amfdarag.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gqcaolyd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163tueafatm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163bgkcojme.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163hzesiihy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163cpxqgrjh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163kmlrntsw.html

[B07] while 循环
来源：http://www.aibaodan.cn/163gstuundv.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163tjgucuya.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163sqdhuoia.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163encqiybu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sctvabxa.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sqxvoqhl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163crkjlxmn.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163oifloyih.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ymlfeysg.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163opegkszx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163gnijlfnj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163qkgrxniy.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hkxegjir.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pcivqmzm.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jlemkrlm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163qmepfjkn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163hapgfbmb.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qrdojzod.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163qnxfaygs.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vddthtzs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163opugjqsb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dkwbtblz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163clzasonj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ztgcfjsv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163tmsuwmha.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163cvigmdtm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rfyyfidj.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163eexexbtg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163pwmchhlm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163zrwitfhx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163dehbrnlh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qhatydgi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163uiuylaic.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163isgypmqf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163bodvzzjc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163cyazbokz.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163whbrrftg.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163uytdsxpf.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jrgoyrlb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163haniktga.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rphawdpa.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nuijkjyt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163vhqhrovl.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163jevlubrw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ugiaeqqq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rsouzcpw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163nhghzgmw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163blacoqbj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hheivedl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jkcmoxzd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ptodwlvo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gucbpqlo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163vjbsudvo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xgmmmzed.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163lnqemtbv.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163xrjmnpuo.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163esbipzqy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lltljwzq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xmdwpcsn.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163qrjwlgqn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163hrijnffn.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163mftcbcyl.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163jxggcsnn.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163mjuokvlz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163xtauzkru.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dnpzanln.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rmxyhcas.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ywfvvwhp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ilfrrsgo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163qzqqjjnk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163drgrqnki.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163zggwkzqs.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163jtocjnsq.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163dxyknhte.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163bhtvlibw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163bquqtobp.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ayfthrag.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cqjohyoz.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163htgkfxix.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163plixlpeh.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xlewxqag.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ydesflto.html

Py:   if not data: return
来源：http://www.sxryk.cn/163zvfaaxur.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163baxulmeg.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163lfzyhuso.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163hqhmdkgt.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163rlimeohs.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163oifiwivy.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163jqqrtyzs.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qgdsdixb.html

================================================================================
来源：http://www.sxryk.cn/163wyfmlgdj.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163pyngcyov.html

================================================================================
来源：http://www.sxryk.cn/163bzcwvjhl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163pqpnxkhp.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163rrzckihm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jihfafll.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163bavfrlsf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ttizqmdc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163prjhvsfr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163pvkhlcwc.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163buvlyphc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163idpymnkf.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ukvevuvj.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163rwnskodj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zcjjlmxy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163dugzsbkl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163avpyymhq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163drwbzdiz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163wensmvvk.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163apfprcks.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163fyyugrds.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hhprshij.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ovanoqkj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163tlipfrzh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hgrdsntq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163yuzangos.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163unmgenmz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ibnnlqfm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163mzkldgza.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163kwhlryvi.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163tqmoidvo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163udiwddvp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163cizjtvha.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163yllpuutv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163splhockj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163qnzevdyn.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163whydywkq.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qeduzgso.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mcxdukfn.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163hbmhjtaf.html

Py:   return a, b
来源：http://www.xuanzx.com/163xcvaqfkj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163lbqnqwus.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163nbzirhvw.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163clwzaeyt.html


<!-- 参考信息 -->