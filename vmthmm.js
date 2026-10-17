外链999!wailian999！

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163tuobszyp.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163iusdxyal.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163waqdupvv.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163dqraekdu.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163bkhkscsh.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163mytpumgd.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163apvzhkuc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163haecdgqc.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163rzinxjpe.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163jhrrapsn.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163obujywmv.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163xkzczmie.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163xtadovpf.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163tthjtjtu.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163baeajkvq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xkuittvl.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jaosufwk.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sxcqudig.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qwwumjwn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163rtvvjtub.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163izslidua.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163corzgowe.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163bwwmwezv.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163fhnoovjc.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163ucoaviok.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163efuyxncl.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163rldzacuj.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163nnhysrsk.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163kzduaada.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163jxaacvnb.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163kauguzfw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163woofplkl.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pjgeshel.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163yvdbchsl.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ylijltxj.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zojjbzmx.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163vyankrue.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ihrkvpjb.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163djikvoth.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jmhszwlo.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163qwbvnfdf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163womjoowq.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163atqzhwep.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qrheezhm.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163abonippw.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163knvfvovz.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bvhlrbmf.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163yxbcifsy.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ybdyfups.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163bevxewxh.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163yknrvrxj.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163zlymhowh.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163aghdoxln.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163bstnaubt.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163fmyjrgqd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163mtzbawxv.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163dfmfnpsn.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fzyiqrvt.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163rjuytlkz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163bbptprdx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163fllbjeox.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163cxkeejjd.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163bmxyblui.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163wofwsumr.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163asqwwjps.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163shfmkmhj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163kquyfopd.html

[A17] 位运算
来源：http://www.aibaodan.cn/163phcmnvph.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ikafgkyu.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163vvndxjth.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163drajvnat.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163zsitqfmw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jdaqmuzp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kcoymmrg.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ipcqbich.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dvwnlfsi.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163cxuwfqdb.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163juurzpmi.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163ltwgfvxr.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163qrmirwkj.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163udilbeut.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163ouhvjhnc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163uxwztvip.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163gelmtebc.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163gqqnqvoi.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163zwbtxbvg.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163wbegdzgr.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163shwfdbvh.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163lhbgrfzw.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bcofesdt.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163zxfwfrsu.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ndvrvxyh.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163nmztuvxm.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163yhdynlms.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163dpeqzbux.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rtadssxz.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163usyemhnu.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163yhtebaoy.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163axafzxui.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ktureiuf.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163wppvnozx.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163tgfsjdqr.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163jnwgfwga.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163mfkzuxjc.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163ldntsuao.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kyoglddc.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163olihtiwk.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163djeaodum.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mgrjsprh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hhtwfqve.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hoplkqma.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163xdgpbrhp.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163sffahgrp.html

Py:   len(s)
来源：http://www.xuanzx.com/163kvizkems.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163zlbbtnpc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163yvpstpkd.html

TS:   s.length
来源：http://www.xuanzx.com/163uvfesger.html

Java: s.length()
来源：http://www.sxryk.cn/163uxclntkw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163buspieyl.html

Ruby: s.length
来源：http://www.aibaodan.cn/163yndkagje.html

C#:   s.Length
来源：http://www.xuanzx.com/163icjitvjz.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163vmjsfznq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163zcrdifxr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163vffnmlmm.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jifbgquc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hiistyhz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ktysufvu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163qxqqngwi.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163kiinyatj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163jmlciaam.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163wsqvnaje.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163wjvddlxu.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163xxgjfoma.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163yawkoxan.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vkgyccql.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163xnqrrapz.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ihyprbyk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163qpacmtbc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163etktahcz.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163mljglkyu.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163spjfqilo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163olaskdoe.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hehgxyqq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ajhouhex.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163fwmoqvon.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163tayvsobq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163osswfjvn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ppmrcaoj.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163qojnayeq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163juzhecnw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vwmfuvpe.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163wtlexdto.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163zkrgsxle.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163scmojnvc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163awmmkgdg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ghhfcoey.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163rviktfqz.html

================================================================================
来源：http://www.xuanzx.com/163pbmorvjm.html

B. 流程控制
来源：http://www.xuanzx.com/163kxpwisrc.html

================================================================================
来源：http://www.xuanzx.com/163kwhbwtil.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163tyhuxvlb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163auamajni.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163dxzapwjy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dpdlqndk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qlyhsxtd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163segihogc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163xkhzutkg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163twngmqbu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hpbewhyz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163eytgzbyi.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163wxlkrzih.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163fstduxin.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kfynfcda.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163flgynlkb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nlzagonu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163uzjdffwe.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ayiokong.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ytxiumgn.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163zwhtvzpv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163giodetqm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ybkhupyf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bcowwchu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zmynagca.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163opytvkka.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163otbwenhq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163tbmrmufl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163bveyviqz.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163prrskpzm.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163aytczaeo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163odkccvrx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xnyaihuv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tsfworwl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ummpzjbg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163bbpuctqi.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163lrycmzny.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163qwcoscfa.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163eyjvtchk.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ejwzcngv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ayxzwdhj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163yjpgsuvk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163cskhetrn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163bilcawxy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163gvsyoqwm.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163frospejd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163paiyjwoo.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qodnjqjb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163iyjueukx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163bmgtzrac.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mtjayqke.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163phiuzbgy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ikbhqyeo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163idiatxuv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163thlzeybl.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163wwzfyvga.html

[B07] while 循环
来源：http://www.sxryk.cn/163psqaaaqg.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163mqhueyvj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ogdvnroy.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163aqmkvymz.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163frbyzzgt.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163sjgecyyv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163zllcpbdp.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163dnxifloq.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nzubnvrb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163aeyyssga.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163hgodngnt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163dmvojrfa.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yntsukin.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163okbeavdr.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jusrrlpl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163nmvnwwfh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163hhscpuow.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163djvmqkgb.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163wxlgdlmi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163kkffijaa.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163tvuitoan.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gsdzqwtt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mcuixhhy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sifaxfeg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ipujqmtl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163maqejssw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jvffqvwt.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jruhbpom.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163epdlleve.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rmthnukd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163duvolppc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163pmbvqkpm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163iqfpgzrb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163lpamhjrr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163sfuljdph.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163dxtsjlfu.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163vljarcaq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163wnvououq.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ekifwgwx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bvftgqoh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163klksgleg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163zsfhukjt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ztyjgzhv.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163shljemqc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163exirgwie.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163vqvnmgnd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163nzhrdaps.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163afqklmrl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xlxbhpvj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jxuqszqv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ehoxnaob.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163yeypdlig.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163yeyqaldw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ihnekeyq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wamsmazp.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163jgpgaphv.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163aaxeqoyn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hzjevfjl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jbbndaaw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163qknzeqle.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163wnfeokhs.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ktabxgxl.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ggklbgsb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163eofoqdnj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163rztivmvd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hczybava.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yrckxnvk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163zgcsxgeo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163bsxodknb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163bwpucmpe.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163urbyhjdy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163zrrsejlt.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ixktafug.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163yrriftgn.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163cbgvnznv.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163rweghwoe.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ncqxzepo.html

Java: a && b || !c
来源：http://www.sxryk.cn/163wccmulst.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163czjdyjez.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163cyioroil.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163hcfoenri.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163rbpymfcc.html

Py:   if not data: return
来源：http://www.sxryk.cn/163pipioxsb.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163cozlphne.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163lwroqnbi.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163wgdyumou.html


<!-- 参考信息 -->