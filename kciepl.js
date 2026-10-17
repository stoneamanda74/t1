外链999!wailian999！

[A10] 生成随机数
来源：http://www.sxryk.cn/163wlolaydh.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163otqodidm.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163klvcilnp.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163tfxbhfab.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163tnxwsdey.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163wbzicmcg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163tldwzmqf.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163xbpswlsm.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163eiklltzy.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163reluufks.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163nwgspkzz.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qurwtkts.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163usvtzfiq.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ocsawnxk.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ftwetoqw.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163jxfibjlq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xgnndltr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163luuykmld.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163nunrvwxk.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163yxxzltxz.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163fsnxdkyr.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163nwcvqasv.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163zfbmfmcr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163vbwarelc.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163wcnehxgi.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163npxqcmrd.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163mumqyany.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163dansfcml.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163okiximsz.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163jgxnrobn.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nntrggvc.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fmbudmqe.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163jouiepdz.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163udqqflcg.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163tqcesjsg.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tqpdejqd.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163ytggdpgi.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163vynacwts.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ujuwlfre.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163splxcbme.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wflgmimu.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163nmukpelz.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163cupgaqyr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163llibhhrp.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163djjstjte.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163tealktor.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163glnxjzye.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163kxglksun.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163vrwbaphw.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163dlbjywds.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163artfvnnd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ibmszcor.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163zlkrumhm.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163txbootpq.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163nbajyndq.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163wjerisms.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163zaokkndh.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163ynsjflvo.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163doayfwfy.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163vycjjhwu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163whftbkup.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163rgndimid.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163plzgcune.html

[A17] 位运算
来源：http://www.aibaodan.cn/163rbhgsnkt.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hrnzjnkh.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163rdmylbfg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kuarlnhs.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dygxinpp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vcroclyh.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kbmbttrl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zudlscmk.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163utzyvxyk.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163agszuytw.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163qzxxunwc.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163pslawjds.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163tnrynsvd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163iauaukdd.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163qltqkevj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163rrvumwps.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163rfdslwcq.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163wpojrioa.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ojohefhj.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163bowleqns.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163hefgtiwv.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163twjvbpec.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163pozkljnz.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163tflsnqqd.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163cghbiugp.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163hvwqslnp.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163lvjrlzkv.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163zgexdffj.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163novanopf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163ibuvuweg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163vlncmkfs.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163foderngi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163wufrqhzd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163krvkangg.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163fcizolje.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163clxexfee.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163steyuiel.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163yipbeqgl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jqbofaqp.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163vdzlsfqb.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163xtnciuhl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lemstxqd.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rdeecvgq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ghiyzfve.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163jsichoov.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163qlgpnucs.html

Py:   len(s)
来源：http://www.aibaodan.cn/163vgcttjie.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163dcvqbhfi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163tbktipdp.html

TS:   s.length
来源：http://www.sxryk.cn/163dhwqwska.html

Java: s.length()
来源：http://www.sxryk.cn/163wpekysgx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163xdaktxcf.html

Ruby: s.length
来源：http://www.xuanzx.com/163htsxsrjj.html

C#:   s.Length
来源：http://www.sxryk.cn/163yeohxmzk.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163egbqyjda.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163kolexdmi.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163vxkijdno.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zyrekxai.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163estbfyfc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jigrijmk.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163spximmnt.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163feokgwua.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163fpffpdam.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163enpouqul.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163porkntjs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163keasbsap.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163rvylkecu.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zcbuhlbr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163vwmbulvd.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163avnrackr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163joawvemn.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163zvaqvizx.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163aiwlfdgg.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163vkgrvsby.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163whpzgfec.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163wtykpghq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kxbqfuqs.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163arvbqvqx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163wzoclzsy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163kivxzfws.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rkaopgqj.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163eruvglba.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163sldflmej.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163pvdxvtby.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163syktoyom.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163iwnttlrs.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ffmgjkhl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163srnlbezm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163fnhnkhqb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163jvuvmozr.html

================================================================================
来源：http://www.sxryk.cn/163lotgaxug.html

B. 流程控制
来源：http://www.xuanzx.com/163fvtlgqoz.html

================================================================================
来源：http://www.aibaodan.cn/163cgpiualg.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163lyufpasl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163hfjfayog.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163nigktxkb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zcnbqkbx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163garahvyo.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rawqodnr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163atjttyys.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163qtxhvzjr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fdrsoovg.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163hlxvqbvk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163jusbgojg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163utewdcus.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hsrkphal.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163sbwbtvtr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tkplvrme.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ckcrwgpt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163rqksslgn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tqnnrylt.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ggdrkwyh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163lhrtvets.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ejyceegw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ehqlkpbw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163yzxxpdfa.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163klidzutd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163nbzitxyw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163vhdvucck.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163uwoudxjr.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163vltpdowd.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163thjshuis.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163rapsmizi.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mguhicqy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fyragelb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163jsgqwjqc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163swfykfnu.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163wsdnjkjq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163lmexwwrb.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163fhvnltkl.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163hifvewmh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163tfkvsqbr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xftkyasv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163qbbyaxnh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163nougvbpx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163btlmqdms.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163nwuewygk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ukzanboa.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163pwkjmbcv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vhloyzfk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163rogcgrut.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163boqhawev.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hlpzvbpb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163lswrnoka.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163qsvsfswf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163nofqfydu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163wtylhbrv.html

[B07] while 循环
来源：http://www.sxryk.cn/163cwadecva.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163swhpulse.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163pkcwshpg.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fpmakpia.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vgpclcwi.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qwykowut.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163gyeokwyj.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163pgjwpewf.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ewcernjw.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163lkqcbxvr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163fuvirunt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163tlhfhkty.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163midfxphv.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fiihsyjh.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163puwndakq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163nitkvcdp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163xitecaji.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eyjpuubp.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163hrrnwfgh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163wlqankcw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163dwruwxvk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xwqdpcuu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fdlkefdj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163woouwhhn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163mwepbshd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ibjwxrum.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sdsokbne.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163npilhwzu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163tniberdj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163grbcwocu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163fsurtbxw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jpdpdivi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163onpxhmux.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ejdyzsaa.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163edqshxps.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163aadkkopt.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163gynzyksb.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163xytkkgxp.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163dpeicsvv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fqyncexd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163tfmbhcqa.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163zsaoyqeb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163osggotaz.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163cpwhrkae.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zrsxlcbt.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163cfyldcrr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163gpnkchyj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163oebpiuel.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cxjmzqcl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qhvlqdaj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bbnbhmlp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wzblwqog.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163spjhwxuz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163sjoxsvxw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163nzdvswuz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163dgjryswe.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qxauvrte.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ccewqiux.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163chaffxma.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163aesnqvln.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xoarrvlr.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163butiwaku.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163adpbmohz.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163pmikxbvo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163glubciyf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163zvqbglyj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tnakcorx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cwagfvxj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163vlrmyphl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163yfmtkxbk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163wejnbsng.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163glluthut.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163waaonhhy.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163qdegrxvr.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163nunrzwkv.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163zzakcloi.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163seihvgii.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cowmtjxp.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163mytnpduj.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163cgdlmuqt.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mzlukzfb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163pbgnepww.html

Py:   if not data: return
来源：http://www.xuanzx.com/163epiosfcf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163gzrztaii.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163rgzbloyx.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ilgwbjhg.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163mkukasfa.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163xgbkvhqu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163giupuvob.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163cqpewzux.html


<!-- 参考信息 -->