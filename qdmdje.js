外链999!wailian999！

[A10] 生成随机数
来源：http://www.xuanzx.com/163emgzejrh.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163qmyacpoe.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163njjjance.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ouharfuf.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163iykhchqe.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163olqmukrw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163vhktxoeu.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163hxsxqtoj.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163tzwhqjjv.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163oaxjxnyd.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163jkgrmgoe.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nqmvfawe.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bvkshnaj.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hqkzcrew.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163osjpnjiz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163haharuum.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163fjgdweza.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fjbfmipp.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163uglgygdn.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163zdmezsoh.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163qencjakn.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163upskdlna.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163rtpusjja.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163hzawokud.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163denwfido.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163crvoiyvh.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163vwheyjup.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163chyvasac.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163alhxbuew.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163zhbgeixc.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xprkzjul.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jvdxdxhh.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163rmzeubnn.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163auahkoot.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163hutihqym.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zjykmjdj.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163rkemnrzw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163jjgshmjr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163vnolmedk.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lwxugtoy.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163umkzkmgx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163zsjfrbkv.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vcgenyjx.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163asnahkym.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163etuaceqr.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163pzupkizc.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163imdfsvda.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163vnpyvznl.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163cwxmbaxt.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jppamfyc.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163pfhzcgek.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163gjrjvspu.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163fmcujkve.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163jadlskyh.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163edzsitna.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163tghnstuj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163iybvpzmi.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163zuinzrdv.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163mfmptnxb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163ulpvymfs.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163nfexfmnf.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163otlpoafs.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163vjeefjxy.html

[A17] 位运算
来源：http://www.aibaodan.cn/163xtegeung.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ldgtkdub.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163xjjkrleo.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vivzbmau.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dmoxfqpx.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rxzvpvou.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cssqlfep.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wzurpcve.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lwiyvsxq.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163widffqjn.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163bybxxjgz.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163umvqfmpq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163nsjwyirr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163vokicgkx.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163utbieigq.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163taftimdz.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163iqjqmnlx.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163qpofjzkr.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163teuncbxv.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163ihsrhsmv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163jevefghe.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163kuiljuuc.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163vblzgtou.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163jovngmcj.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163xzykzacz.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163yesfzrds.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ofvkkbuz.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163rrlxvcqj.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163agttksih.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163dsaomdkr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163gpmogjcl.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ybeelqzb.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163hzmhksow.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163dicmrhoa.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163phewiufp.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163oioshqqh.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163aujsirrq.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163sobqoncf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vrtjjjtg.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163aizmrkfj.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163vvclzyps.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163iijhzssa.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hxyioujr.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dpfqyxky.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163octfldnw.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163suvsbcdr.html

Py:   len(s)
来源：http://www.aibaodan.cn/163bclqnsfz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163swafpyjo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163hojcpmhf.html

TS:   s.length
来源：http://www.aibaodan.cn/163nokivvft.html

Java: s.length()
来源：http://www.sxryk.cn/163ptadlwlf.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163jhqfious.html

Ruby: s.length
来源：http://www.xuanzx.com/163uugognmm.html

C#:   s.Length
来源：http://www.aibaodan.cn/163fssrisph.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163gqghwbme.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163nviclqkr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163mjiejcfu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163knonqmul.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ssrypwrm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qpjxflby.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163hcpeupdh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163btaytusz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ewanyiib.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163qgwfugzg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163jejdspru.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163igvtdtkb.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qpfiteja.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163dgamzipc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163uwnepulk.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163jitzouzr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163qslqbqfv.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163dfxyuyjf.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163lvwshlzu.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163pgccyfwl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163eybbanam.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qkcifnvs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163beligomw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163okunlsrk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hrnfprdl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163lsbaygsf.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163utubymfk.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qgsnrmkh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163kcomjzov.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163tbeibxij.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ayykhnbk.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163cuthltpn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ufyphpxk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ocwscoze.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163mhyaenpn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163yurhplqe.html

================================================================================
来源：http://www.sxryk.cn/163arojpnmv.html

B. 流程控制
来源：http://www.aibaodan.cn/163rdevtmyz.html

================================================================================
来源：http://www.xuanzx.com/163vwdpgfwn.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163lvclrxjm.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jyjulydx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163eypvwrun.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zmuvvxmt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163waizmkyp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bwzlxsdv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163fzktxxbg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163pltnowos.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hqduuqfk.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163lxxvuakg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163hbcxsplb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163rcxqsapp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rcjbaarc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cswkwgul.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qxrxavxn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ysrqcvzg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163vniwdeqq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kktadpli.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163belbxzso.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163nomdrvsd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ncdkaujs.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163kkbkpenp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nvoczgck.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163zsfbsfko.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163bviwtgrz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163nrcbgort.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163zodovtkr.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163myhcnczq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163snywkyut.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163gteclwwd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xasouctu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163feuqzhjf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163uvxcwivg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163osqypojh.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163gvmdvxpc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163dwcueinj.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163skufuigz.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163uukqfbmz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163efvtdyqh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lblgcyvv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163opfxavno.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163fjrgakjp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163sgzixhsq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163frgnixis.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163qevwglci.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163lofsisxz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163tvfgxiuk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163oshzkpuf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163pexgooam.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163cudzlbvg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163gizsyqhv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163itrbnreq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163lufvswkc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163wuwjzoaj.html

[B07] while 循环
来源：http://www.sxryk.cn/163uhaciltj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163yymqtggt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ysnbrrox.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qcnsywxf.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jmqckyng.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wxjrgszo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163boxzpelk.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163pxfjrdhj.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hznufiqo.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163iqryxwxt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wlrlxnva.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163xggzjesw.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163turdbmoo.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163unafdzcm.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163twfakobi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163beahkeit.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wzxsqjxd.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dxlgdndu.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163mpcplbdk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163pehxpoxy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163lqicakxk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gkobdldk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wdjlfqzv.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jveqjxol.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163cejxndjc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163qmxpvtyj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ehzxuxhh.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163giaomxjp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163pukblicm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163kotfcxgj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163crhidkla.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163pkeqqhrc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163dvrnczlk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163lcaebaiq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163iaaezmpk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163nsdpbjmd.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xbpdkxab.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163mubpzxdb.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163cwokeymf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163uysdkefn.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163tkbwnazk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nxiferbm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jgvskdby.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163clmuqnrn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163oitlbook.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163dsawyqjg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163cahonabb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163gosyiaej.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yrrxkkkd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nojynsaf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163adnmxzai.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163agysnwwq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163sufbhibn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163gxamnjbi.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163fuwknoss.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163glezwxsl.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163izdiildp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zviuzjxv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gfnguitc.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163wknbqpyi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163pvkziedr.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163xuqlxdlu.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wlllczbj.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163kgwrxtoy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163aeztfpvy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163kpwdtgjx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fqprdcvz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163cohhyayv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163hhatcwuy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163urvzuqxx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163klvqrfya.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163lcyyqtos.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163bimfqxmp.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163zttualuu.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163bkahkdjl.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163pegkiekl.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163agmdvhqn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zpfxrnyg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163eswmctnw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163tprdfotp.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hgduytyw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ziapyeix.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163xwcvivno.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163qmalrjzq.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ohjjcmkk.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vkpwkcle.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163okacwazv.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163fgjnsmac.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163szumamxi.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ljsgwtuh.html


<!-- 参考信息 -->