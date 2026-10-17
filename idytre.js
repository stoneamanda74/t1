外链999!wailian999！

[A10] 生成随机数
来源：http://www.xuanzx.com/163wsdtwrhg.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163mqdbursj.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163ojxxuufi.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163rkvtmatd.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ikspjdxb.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163pfqkbbkp.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163iaiksmry.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163mjpsrczj.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163huhyfgyz.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163xpctqbuf.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163vlwrndli.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sfvaqwpz.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163cfmfslmy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kwqycexs.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pdpjgvkq.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163ndilyoza.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163odueocwl.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gttlznpo.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163rdysdqha.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163xhyedwhw.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163mwcoizcz.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ipwdgdkq.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163lcbnpdxr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163orgsoila.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163zgvknrmz.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163jogynnqq.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163vdatukhu.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163smoeasgh.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bqudcliw.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163sdcaqbet.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rxyszezs.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163sbitnyaz.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163havteaaj.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pwhmbyev.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ujxyesxc.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163nmprfncn.html

[A14] 注释写法
来源：http://www.sxryk.cn/163nzujwqij.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163ajyvwhvg.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163cbogywfk.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vvswlsiy.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163znjycoxc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163cwanvvnh.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dcsscwnp.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163dpbcxwyw.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dsqvbvjy.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163fsytihbl.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163fztxvush.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163aoyvttqb.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bzqsblqq.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163dbemxuib.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163rtoshwjf.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163kumqdeqz.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163siwtfjna.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163rfqwaeek.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163zfhkohly.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163ggfyztko.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163muvthvqe.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ytfiekjs.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163cpfaglrc.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163jaanmjhi.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163bfgatlyk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163xytgfipl.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163hktmtuou.html

[A17] 位运算
来源：http://www.sxryk.cn/163xgyeupdq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cnmpiebt.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163bketrjsh.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ijjcfeul.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163manonjla.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163peiutpsd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ppbomrpi.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jdorrggn.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wohwolep.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163rfaroxhf.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163jyzboiai.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163xpfijimy.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163fjelaitr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163rtwciebz.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163luneglgk.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163dpvwizkt.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163axehecaq.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163jwktgixq.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163bgsizcau.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163ytpjmotk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163bgfowgrs.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163eyewnlra.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ygexmfvb.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163rsphlgwt.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163nsfprket.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163fenigvly.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163fdyxecav.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ffldvmcm.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163umebsbrk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163jtgeuixn.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163zzuykorh.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163ludnbrtq.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163xtwdabbg.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163xdnweaio.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163lwgvzegh.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163qaoupcru.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163smabusmb.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163etkqxejy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163casknmun.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qymeqoko.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163qwvjenvy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wzvwgtic.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163acbbtnla.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bjxhoerq.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163cukpaowg.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163buglvtmn.html

Py:   len(s)
来源：http://www.xuanzx.com/163yrftcomh.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163aikfkbob.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163xmhjpjma.html

TS:   s.length
来源：http://www.sxryk.cn/163stpcgmnz.html

Java: s.length()
来源：http://www.sxryk.cn/163vuamtvfx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163wkvuybvv.html

Ruby: s.length
来源：http://www.xuanzx.com/163zamgihaj.html

C#:   s.Length
来源：http://www.xuanzx.com/163xsyegjyo.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163mmnfchda.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163rvawitjd.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163zqsyjwoo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163yjkqshbq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163rqlkmedh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xycbspix.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163xupgvjjt.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163eabzqqan.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163efpmsfsv.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163lfxoobbm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163nvmyuuvi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163jnzimhth.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jdubgusb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163gygbnlnc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163blexzggi.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163nymcjdxa.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163xrfljmdf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163xmaicvgf.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163bbibdrtn.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163tsexwjik.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163iaawdnyx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163iwmofplu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qgixyisv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163pethinvj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jhfmekzs.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163papymqtn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163xzokcakr.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163urdmwkqg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163olhswofq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163hxpyuida.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163anvxfmlc.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163qnrrmhfq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163svzvxzvn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163shqvcuss.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ehaehykd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163iloupxog.html

================================================================================
来源：http://www.aibaodan.cn/163hgkhizaf.html

B. 流程控制
来源：http://www.sxryk.cn/163dsljiavr.html

================================================================================
来源：http://www.xuanzx.com/163jwareuer.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163vxhxzcyy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163apuquqzu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163kioxiefw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163aapwdrcb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yehkoaww.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163eevuksnl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163zojlzero.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163pvwongfi.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mrkbxwki.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ikwgipal.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163bhjolofp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163owxemnqy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cojemgdd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163etnxakwx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163elreepfb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163qeypgsms.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163vbtuqgvr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xsqndbya.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163jvmussaz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163znjxgdni.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163wzexehxs.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163xyvsvgfl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163hohxsyeb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163rwdkfmet.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163bgbbhhup.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163crjvpbor.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163gmqlzkaz.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163lvflsiwn.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163lnhfuvct.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163zelbwpwk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tfmssnzj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163mcyxuimp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163wzkiyeku.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163hkqyfpjj.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163dzusdhth.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163guffqntr.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163yxmtibpj.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163aghtjhhi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163syexukao.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163mwygeghk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nqtvgcpj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163haporjrr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163mstejcdf.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163dofgpzne.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163kzosiwqj.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163cgafunvc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ljffpnug.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163plkmncqk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163oxgiqgdm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hwozdtwr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163vwzqukgt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163roitbzsj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163dxpxetbq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163amppnynk.html

[B07] while 循环
来源：http://www.aibaodan.cn/163saxmopel.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ckqnswfg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163jbmdvfej.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ddiyqmng.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163chlzinbl.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zmoxtfdl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163loijedza.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163hcbjgqhr.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hnfxdbwo.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ytmywfxz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163xxzkzhml.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163orqviogx.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wxaacgss.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yshpkugf.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tgdfbuhe.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163gkehevxz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163cpghueqo.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tjeifknk.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163yaioshwc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163mgdaoziu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163pzvfprug.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dxvcevyr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gfrbtjxx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tmtkcmnt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ijzhqdjh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163delfrocg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bfrrvihy.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163esclzuvc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163wfjssdup.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163pjhbiezm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163pjuktxlo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163etiwdiir.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163nwqnjsnu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163rukxpllp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163qpxfhlvh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163mnmyydld.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163iekmmgbh.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163truglodt.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ooctpzta.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163aijnlonw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163yaekxrdj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163uilydjtg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163noxenbnv.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163irmvjosw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163apmomzlk.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163efpybbrs.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163emvexpgo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163rcdovsqd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dvsqznvq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oaibjkmj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tscqlbtn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163xiydpsuk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163nncmxaze.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163tecilgwp.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163zshhlmzp.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163glzziydt.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ibooawif.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nugpgkui.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163shbkzbta.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163hdixcxrz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163knzmnptr.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163oaprlkzm.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163awbnnawc.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xydeebqh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163wyxaynwu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dsjqciij.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bszmyicx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tfizkwzd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163igjqgtyx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163khysitup.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163mwiqokcx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zzmlqyji.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163hxjieohz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163tkkduxzl.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163qopkvkgc.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ajflznoh.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163clyeukrd.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ddmslpet.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163nyxyorhr.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163tlztllpo.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mrhibgyb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163dheibrcr.html

Py:   if not data: return
来源：http://www.xuanzx.com/163oahhctrj.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163rfwumrkf.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ehvomxzt.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wpiemkvd.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163exdrumag.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163trhhimnu.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163inofgwnu.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163uyltluhy.html


<!-- 参考信息 -->