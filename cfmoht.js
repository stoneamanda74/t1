外链999!wailian999！

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163aqgbsjea.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163xvdlasau.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163cybgpzhh.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163wcbkqycf.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163szdmhese.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163onaeezit.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163tszcskzp.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ypogahne.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ncuccvlr.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163rhdaytpf.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163kibabpor.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163dqqiacub.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163xhncxwzu.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163blzxvbca.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163zhruvbmg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dbovjaoh.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sqpsmifo.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kjmfuazm.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bhqfmbtk.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163hpmsqxui.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xnjagxyy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ppugnqep.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163suldmxsy.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163luwcqtvy.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163keqtqlcc.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163knizsjfn.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163bbzufawq.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163ikvhvlwl.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163ustabnth.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163fxhcskjg.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163tojssgrj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163zvpkgiqx.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163lvliccax.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163dhtosbyk.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163knykqpad.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jdwywrpl.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163shdsqcmn.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hypzcjlu.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163qoblidef.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ehajfoga.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163ttdbyapn.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163ounmthlk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163srohnazl.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163aqthercw.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xntavgqd.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163lxokitpg.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wffogxmb.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163hazuhcrw.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wxdvznbp.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163kdbssxqj.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163sbpaezoy.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163glaanazt.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qhvdhblx.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163pidsstyi.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163xkwolxjk.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163advstnhw.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163lsnrwcct.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163jtqydaia.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163amcsvjmn.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163kbvpbfbh.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163tiqlvtpn.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163spolglhh.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163dlopxixv.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163irgxgvvp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163bhyszujc.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163vjeerlwh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163wrxxcotz.html

[A17] 位运算
来源：http://www.xuanzx.com/163crmbagiy.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xmngsfrz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163gqxgsnhb.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dtsmvcou.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hzcwdqlk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jugpjfyd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jowytxar.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mzjrmuik.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ulzhfwxr.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163nztldvbu.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163tmpwssez.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163oiixdnfu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163neqzssda.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163yedjafqr.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163mmmpzncy.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ytxxokoy.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163vjmjcnsg.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163prcjlpsh.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163enjloljv.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163scdkubek.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163svmjbcax.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163eaezzjss.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163wakxmldv.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163fbfovqak.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ttzvvocx.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ozmvmvds.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163xoplrpzd.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163zneoptge.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ommlgvep.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163ipoyqrjo.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163flmsuhms.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163hzgwmrhs.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ncrbdrgo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163mbiujacq.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163zqbisrtg.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ywmykojo.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163zuybxshy.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163gqsnamfn.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163yekqelpf.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rdvnbnzr.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163clfqfsji.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163whoavywz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163svtgnotb.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kxzenlcw.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ijuhivkg.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163szlucexr.html

Py:   len(s)
来源：http://www.aibaodan.cn/163scurfcdl.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163uqlnntvm.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163yatellmo.html

TS:   s.length
来源：http://www.aibaodan.cn/163muhcrwxl.html

Java: s.length()
来源：http://www.xuanzx.com/163hdsjwkjy.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163jorkquas.html

Ruby: s.length
来源：http://www.aibaodan.cn/163oluoqklo.html

C#:   s.Length
来源：http://www.xuanzx.com/163azybzwqc.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hprfkhme.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163bahublfl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163ujvdafys.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jzpugsun.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163olumxpgc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nvgehbja.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163rpupadlc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163qvagqwme.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163oxgelgfh.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ozfaaccn.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163sndfjlyw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163iwpobeec.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163fgtgojml.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163bzpxmiqp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163nfpyptqv.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163gtubsect.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163zgjxnhjt.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163tqphgzvf.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163etjfzqpz.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163huwypkvm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163oijvmwxo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163iiryeyry.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163pdvhrlgs.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ktznwlay.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163zggyukvw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163qzsagrdy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163uxaxbynd.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163phyrnune.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163imhdwpcd.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163bqcedfck.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163qdwcjcut.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163lpufzrmf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163mobqbziw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163kkdkuifj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163iwdetnxi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163rlopuhob.html

================================================================================
来源：http://www.sxryk.cn/163tbmdvjbq.html

B. 流程控制
来源：http://www.xuanzx.com/163sqhsnkib.html

================================================================================
来源：http://www.aibaodan.cn/163pqqfgvvq.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163aexxadnq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163zrtjljla.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163jdpxfplj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vksulnxi.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cpostyxl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163onatxhyn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163iqoavpzu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163vftinjxp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uhbnwgzo.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163emsbdthz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163nmecbcuq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163yeyolfbl.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163icdwbewh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mpojqpxm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163prwnkukm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163wfpkxehs.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163xuwkvjct.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ezwsciyj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163eqbfqnwk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163levbursr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ydlgjczh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gyyumzlj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rvdztrah.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ixivatht.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163loyckvqg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163wthdbvuq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ygspdoct.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163fvdmpotl.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163nusbxttn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163uhgnjxvs.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tofdesxs.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163eubqaska.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163cbvyelix.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163sdrcxnfn.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163bmmkogui.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163teerlvvs.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163wscskpab.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163vszftwpi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163yvrnurqv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163cbaqclmg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163amiloqai.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ckfgyqsg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163pkdedpjz.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163elvkfosl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163jecmkpaz.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163nyjztkxs.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163novqgfch.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163wckymcra.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ppgumcbs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wvzhfuzy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163jjvwikey.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163udvgywpp.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163igmtwuxt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163aclycxlt.html

[B07] while 循环
来源：http://www.sxryk.cn/163inlakkbs.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163zpnakbfv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163doebdube.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163noofsafn.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bygjvnxv.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ivmyomht.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163gtowswlj.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163nwcnrrih.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wyonbykk.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163dsgcfgzh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wmgyqvbo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ynjoflei.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sxgbmusd.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ayjuhilc.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gyhvijlu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ekepjyhb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163hhrblgva.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ddunzagj.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163dgctpnrt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163xoygqtey.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163fjxtvizc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ejhgwzrc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163amzcnxds.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eoydclqh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163zywcirkf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163wvrhoohb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hgbkzmrv.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163fvlanfsq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163grqldaxk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163yxflgmyc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163xcdmwmtg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163bxzrephl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163dabmhpnk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163kvgwzude.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163tnvwbfuj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163liinsggj.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ngvjicfu.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163tnyhmbcu.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163qxkdlfcc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fgnutucr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zokpfnjd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163gzfqhtxa.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163khqzwkqq.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163cycovigm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163qrptrvdn.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163uhzrrtwj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hscjtonv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163rqeajshn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ymiizofk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oxkekmkj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pwztgteu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163nwrwjpse.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163xdkjybxy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mcastnqv.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163mmfktqbt.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kcglpmry.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163mhzzqauf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ydvgsfey.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nkkcralh.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163vzdiioja.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163mjggkppd.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163fvpzihcp.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163caqkrdyx.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163abltgymp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163qlybreph.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163thfcgibc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mbwheaio.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163yghcfhhj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163yndnfrnv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163xrpfzrqf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163nvtbjwak.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mghbgiso.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163pxdyprgz.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163fvmcxzaz.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163evdtaqfj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163rzqvclpw.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ddhdgfww.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163fdawixmh.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163xjrlndgg.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mqvndjjy.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163spnomrzh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163whdlqtxe.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163mdepmcan.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163evxbhprr.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163mtrgvxcb.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163umfijmbd.html


<!-- 参考信息 -->