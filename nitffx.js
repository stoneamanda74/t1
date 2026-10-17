外链999!wailian999！

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163salmchxt.html

TS:   String(42)
来源：http://www.xuanzx.com/163dawguezg.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163hpkqksam.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163hugvrcjz.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163fahjttyr.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163otuwpyhk.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163pczkwyqv.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163thfzfnuu.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163wkyjvrjh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163fcidyifh.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163hppebtrv.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163krbtwuyd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163pjmgdbjs.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163wxdonnih.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163lhtxtmsh.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163howtriii.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163muuofjwk.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163cqejebhr.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ugmvizza.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163cayoeqqq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163uwjtmkyq.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163vdswafio.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163rdcvqhgn.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163dtqdtbnb.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163amyfmbot.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163altvijdi.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163dklummzv.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163leurtoiw.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163mglwjfrz.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163aryejyav.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163fsaeaiez.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163xeocoywl.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163lqzqtkmx.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163itldpnwz.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163uirphkzb.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dcnyhsla.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bprwcoah.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bxhlyhia.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gmqmpjwt.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163rydryerh.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dbyojlay.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qnalgzmn.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163zeidsykc.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163oocpuuut.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163susqkdkx.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163iuevcqzs.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163tjkpodkr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163qezyctie.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163wndajyhe.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163rfwzvwkq.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163rwvqasvn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163pmvdilpt.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xdhocyah.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163ruejbqkn.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vshnxgcv.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ptgxafiu.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163iyumurpe.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wceuxdcc.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163qhqplmxj.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163edgadfom.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163hvtaczpm.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163wavwcodj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163dxyirbkj.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mfwcxttj.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163uxhuqvyu.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163yegedawt.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qblxkqoi.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163xfbrrebb.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vytmkskg.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163hughjhko.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163cmxwufnz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163lqysqudu.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163rqznvqxj.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163zmumalle.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163jydykohj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163qiswuaux.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ycqoiafz.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163nhmitftt.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163atkimhqw.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163vucfdodo.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163idanrktt.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163apqudalq.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163nnncfjka.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ejxvruav.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163rmjskvfp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163snfrohyn.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163zjjwsfeb.html

[A17] 位运算
来源：http://www.sxryk.cn/163sifolswl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kuwkdkle.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163ukvemabe.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dojwnytt.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163mpxcnxgu.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zxtkmmrj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163aceutfwu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lorcyzge.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lvzjaqkg.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163wkomduxi.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163bqyorvor.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163eukhbgvo.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163fdajuatk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163erbkqbhp.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163serarafe.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163zmyothlr.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163fdpeqrzt.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163vlmpplbx.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163qpqkmexn.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163qweevygu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163xgnqpbts.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163wakvahin.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163navpuerx.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163hfqeiwyf.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163wcincdmt.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163edscztzg.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163hlwacejp.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163lhirzooc.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163jjmdgzgo.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ldwgzatr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163cuxkzpep.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163kgkgwqms.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163doadfukc.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163qtfjngon.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163vvaxwaxk.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163arcistdr.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163ftjzwpso.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163yahtupqp.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nxixnwlb.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163sztjzqyj.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163dabydlny.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163sbhqrqxb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ildffkbj.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163voqfrfca.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163cxoqtimb.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163atrlxtqq.html

Py:   len(s)
来源：http://www.sxryk.cn/163tnxhzgrw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163hvxjuxdy.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163klxdbzxz.html

TS:   s.length
来源：http://www.sxryk.cn/163bqhelwam.html

Java: s.length()
来源：http://www.xuanzx.com/163aifeglud.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163oybmvdjf.html

Ruby: s.length
来源：http://www.aibaodan.cn/163icbehsef.html

C#:   s.Length
来源：http://www.xuanzx.com/163itvvitrd.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hrebkhic.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163qluwmdfh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163zglqjgre.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gruatsgs.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lowsmwlz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xwzidgcs.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ibvszzrm.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163hojwbgyi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163wunwkhqh.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163chbkaqqz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163dspdwknp.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163pydpzfer.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163bgxmdeve.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163cgfuijzg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163jwocjuwu.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ooabhpet.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163hgaxutea.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163dkmfmdjf.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163ygffuhfo.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163xyaeqvvm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163sasfklkp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vnlppuvp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163txbwqpji.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163kjkmsfnx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163zhpkmhmc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163fpqlexdo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163wyxhrxsd.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163rnvcrsfn.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163fiiczihu.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163pcggcfqh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163rjgbdptf.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163xcxyitbw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163bfwkpekk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163ahuuudig.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163svwpjeje.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163vtjzupkp.html

================================================================================
来源：http://www.xuanzx.com/163kxeokhbx.html

B. 流程控制
来源：http://www.xuanzx.com/163zcliejcb.html

================================================================================
来源：http://www.aibaodan.cn/163rowozjqv.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163gvdqryfk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163wgplhtxi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163iyrdfgml.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cvogdfgb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rucgqfps.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eabifysz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163yvkalrqc.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163fhhyuapo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qxnsuvqu.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163gbulemxm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163shkipdoa.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163mobgfhxh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rdagpqxh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qkrjdldo.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nuoissjy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163cunsokgx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163kybkimai.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gzzlddwb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163lautnnzu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163kzwtixxd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ybjykteu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zqdbinwr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163agxkmrsf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163lemdwxnt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163apqjdkob.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163snkebsbm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163eikngftm.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163zsncnaff.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163zyydhdhs.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163fftawlcw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163oclrletc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ktjlbyou.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ixxnpuep.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163jbmolzsd.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ivfwmnxd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163svqcfdwq.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163pkmaqfsi.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163yhrmouie.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163uclkylcx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163joabegbx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nxkbhdew.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163epqkiabh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163qxxuopay.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ssizqoau.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163uterofsc.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ebihoelj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163dnaupkyb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ymlbrqfd.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kiwxdjxt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ahvtcmmw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163rcucxquz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163jilrhlcf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163mzxmlupa.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ccmedhog.html

[B07] while 循环
来源：http://www.sxryk.cn/163dyrhtofi.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163qwvffncb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163idaycnit.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mbcanlof.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uybcmvjl.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163idxbssrk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163llyyialm.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163oegkttwi.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rbsdfiez.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163lamzidux.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vfozgrpa.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163vlpotrti.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163puilgcsw.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hbqpcevf.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gcsimgjf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163wymaeizr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163nxcnyuhj.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jobfokka.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163nikjwfud.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163rahlblsz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163axtmemul.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mizvrmul.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ddlnwlpy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163trsltmgm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163wowquwsq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163amvcwfyb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xclkhxxg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163gwvlwqep.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163bqkzclas.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wfqhbnhk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163augvcumd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163xxqlfdxi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163itcjrssu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163guowadoa.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163dqkgikdv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163lhnbexok.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163hsdxcbpz.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163gzzirqll.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163shsbdzxr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163udenofiv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ogygdagk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ttcjmmuj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kkcdwqou.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rulaledb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163uopcrpjq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163kfjkgruz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163chdocwwc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ncsujazj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163oakyntjq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jtpdnqii.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ckfdmpys.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kmzxsmdj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163bumnosax.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163iykcdoqy.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163hiydpraq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163swlwcqup.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163gziiajce.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163bluyyxbg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rhpxahqm.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163tiurugqp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163asdsuocb.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163drrfqbvn.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163qoxqntaz.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163uqebdico.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kukijymt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163dwjgiyoc.html


<!-- 参考信息 -->