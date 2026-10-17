外链999!wailian999！

[A10] 生成随机数
来源：http://www.sxryk.cn/163nlssqfag.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163ycwwhfhj.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163ojpabchp.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163oxrwoank.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163etaxbqlq.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163rjqjihcg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163nzpvtfhn.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ztopgimo.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163vwoesvxh.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163hmpykuas.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163rvjntzhq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163melmdlat.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163genjtccw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kllbrzrj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kszpnkgl.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163uenfvdmg.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163agxojuhm.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qwvjoqyy.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163zkxdsawm.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163egeqkgoy.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163iyayhdjl.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163qdfctzyp.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163zaoxiahx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163cwfoitfi.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163erwbsnsh.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163ydlqpqvh.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163dkzpuuyk.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163jooocolt.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mdxflkpt.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163cudnqabe.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xnmdgbss.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163uqwstnay.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163abhnvbso.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163uzbxoefn.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163xmcxtect.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mrwmynxg.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163iyruakbz.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163sbgbtqda.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163zcpqsbfw.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163blzifyju.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dyhzjfah.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163gkvkwirz.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hwvlkzxg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163sjfzsrub.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zmredvle.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163bxkryxez.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163kcsvhwwb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163qgxrjkzc.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163aifypozy.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163izhjlgha.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163bqkxhypi.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163fyucanrd.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163sdlwwzsc.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163fscweqfh.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163qsdntcyw.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163stxazigf.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163wojylgqn.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163jvbwakvu.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163yteokdos.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163hymfnlwx.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163rqtefcmc.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163kicwzgas.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163kdcmissk.html

[A17] 位运算
来源：http://www.xuanzx.com/163pvcysuid.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qgysdeoa.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163bxkjcglq.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rmchtcmp.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ngdilixe.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163afzbmabg.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wmazpmic.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ctpxakhv.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fgvgdepi.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163qlbtwwtz.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163pdlqzqcv.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163dytjzlmq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163oqqcuufm.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163kpdowieu.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163hewblwck.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163wqheajmf.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163zbizpnhh.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163dhhniabw.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163bplcmckr.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163qadtaobq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163npiaqvpw.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163foegegum.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163hpdowvhq.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163teoeuoso.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163xbviddwv.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163dwcyyqtb.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163znpkwwoo.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163zzfjwped.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163nyaeytkz.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163wqmuvscc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163dufkviuj.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163zxfbxygh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163zhpslmki.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163icixzwtc.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ccrkyljt.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163nbtyuwwt.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163pcezpibo.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163jmhdpiip.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bbirmsty.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ftdyibkq.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163mokrefro.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ykykrjjy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fpsqhjsc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ffddrdho.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163vgqmhkxh.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163mfgjrram.html

Py:   len(s)
来源：http://www.xuanzx.com/163rtlrnebv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163jitxreak.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163hdgjuwxk.html

TS:   s.length
来源：http://www.xuanzx.com/163qyxsmqur.html

Java: s.length()
来源：http://www.aibaodan.cn/163pvpqdhty.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163uwiqwuci.html

Ruby: s.length
来源：http://www.sxryk.cn/163fvamkgbn.html

C#:   s.Length
来源：http://www.aibaodan.cn/163akyynzig.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163bsxpvahv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163ssbiercr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xdnhnzcl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vyppsolv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ubqxbnuz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jfcgjtwm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163oflxpqbk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163zylfpnud.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163isrpjjqr.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163brnhaosh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163yhwugacl.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163dbnxpwkb.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163rlqnzjlc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ywrznsxh.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ybmydwik.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ckvrhwnm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163irluldoy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163yjbrcbzy.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163rahrhjuj.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163dlnyqded.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163nudgprrt.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vvjfzdgj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163oxrdwndy.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163mdxixkqo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163qvchvoov.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163pysyiwbw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163xyveboat.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163gkbuszep.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163pcjjvlra.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ijcnvyjc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163lsbyqbbc.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163lelmiyod.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163iqxnzqlu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163dotgwabi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163urifmqdx.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163emdqkber.html

================================================================================
来源：http://www.aibaodan.cn/163ygpcwfgl.html

B. 流程控制
来源：http://www.aibaodan.cn/163nocehnye.html

================================================================================
来源：http://www.xuanzx.com/163afxavaed.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163yfwjyyet.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163sctwrfni.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163prekgdtk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163elqekeec.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ujthuteb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163polruexb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163fvjstymo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163maflrkyo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ttssrngb.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163altamkzb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163vswyuyct.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163cggwaghx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bfiofxtt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ofmtpzcy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zewpapyx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163zvvsbjak.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163vhttvgxi.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uxrmrnew.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163kydropfe.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163hymbiksw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163kqdmytqw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163acxhnnes.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lnazduje.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163aotqsyhz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163gjhdaszf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163gdkbwxoj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163xlzdotbd.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163surfjncs.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163tibbpbuw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163tpcbzxez.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vuomdbws.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163sfodwksb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163wpipbuce.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163baskuaaq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163bxsrduti.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163wrylrqvz.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163xpagvhny.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163kcnpomcm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163adrsdkfy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nuozaqii.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163gsokjavz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163cradpons.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163yugihwlu.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163dtzcucts.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163xsnwbmpv.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163gcsoojbi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163fznwqvgl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163arqcpzee.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fwrelpsi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ccocmcee.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ndsluzoh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163vhlnwvin.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ubbwlhql.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163txkwczsa.html

[B07] while 循环
来源：http://www.aibaodan.cn/163bpsmklzy.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xuwprwpe.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163qcfueqxu.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jumapyky.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zimfxswo.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lqwgakpy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163crcdtfue.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163gfrleybj.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ddgunmry.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163mrfnfybq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163cjizsgcu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163noukkorq.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aytjioxx.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hqwnntoh.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ysubstsy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jdculiku.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163xiiciymk.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lsttlwjo.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163lhinxxed.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tedfhnlb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163nogqghlv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163enttekrw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ecrnqkva.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163elafroaq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163knujflyl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163cnliwqgz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qzbfdrwq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163awtjazri.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163jngmsxvu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ksroyfjy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163plimcujq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ynyciwex.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163zdmuawsq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163yuahvbdj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163faspjfcu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163qidiwrxo.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163uukvqpnw.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163jxbkpweb.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163szxvnjfq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163incqjzww.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zeswkbyv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163xgccczlc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163fnjsopes.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wytkwlbu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163uzgtkmve.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163micydlgh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163attjngev.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163lsuslsue.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163eojxovpd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ymrdqrsn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jdrfiruu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163suswiiwj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ditbtram.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163drsfovwo.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163qrlphzzx.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163mxfjgrrf.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163bfvnulni.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pmevqkbw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zmaraqnv.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163eqjfuzso.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ohwtpcut.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163wijnhdzl.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163kwhmwhlf.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bzxymwek.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163fpohwvmg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dfwrcbrc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ajhmewki.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163yskllufv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ovtwgzrp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163izespqmu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163peybxvyx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163lxjjetfx.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163lojeqtwv.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jnabralo.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163uujlzevf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ogmhqdqh.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163gnhxgtpd.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fsmkfffm.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163fqyxivyn.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163szxvjzwz.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163tpjmwlcn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lxnzpltx.html

Py:   if not data: return
来源：http://www.xuanzx.com/163wqpnsbtc.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163oodlndui.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163jvwozwbs.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163niebhgou.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163xtzwlzet.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ttsosfwu.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163jnqoivbf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163fmuxzefr.html


<!-- 参考信息 -->