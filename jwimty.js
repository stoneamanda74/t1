外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163tukgpjwh.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163gibtfuqb.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163msqjsxrb.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ebklbxtr.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163ezynwzxm.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163qeegfwxp.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163jqzwymez.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ohxrrkxe.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vfiinsch.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wxsuxdms.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eilcgojm.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163srsjntxq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163osvycssa.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ubvbpevu.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163wotbwffg.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163jgfnhhkv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163mjxjiyvr.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163jejgwgwz.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163qroygglu.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ihaaelug.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163fylneeri.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163vxkzcwam.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163zotaoura.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163rzpherup.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pojpazsh.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163qgfbihri.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163imudcuvu.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163scgmyodi.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163tqqavezw.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163sfgjpqxa.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163qmvjvavm.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wifwjfqp.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163zabrnmku.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163xrqizgve.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163cpiqdoqp.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xoxllfud.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163crfqkysn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163bkvzoupy.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nncqyitg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163kkratkvc.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163agoxaucj.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163qbrmsbiw.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163dxnrefae.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163fgsmsdaa.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163jbhlboch.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163zjqhyqwh.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163dexpqjyb.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163qxqzvumw.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ezrbwfuc.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163fhikqxwn.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163kjddrlwh.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163bcszyvbi.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ylfufjjz.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163qjswklhd.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163nbchxrbh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163xztkutzv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163qkbpdcse.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163iqvnlzar.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163mrphbdug.html

[A17] 位运算
来源：http://www.aibaodan.cn/163jjfcjluv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nccaenhq.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163pbpbzxel.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163avpxkdzf.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163nrhdjzsa.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qlpgwyin.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qurzqbor.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163yaksfdqs.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kkucocgl.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163dcpbtfnw.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163imdkdekb.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163zlowdilm.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163vurpeieu.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163aspdmkct.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163dfwxqgeg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163uqqkeslf.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163yctuxtsf.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163uectkqmg.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163uwzargax.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163yeelxagg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163hbkjxvzx.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163mclplfln.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163xfxgbmnr.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163riovwdsn.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163piemlqon.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163jpcllaxd.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163aaghpesi.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163opprxzmb.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163mwyhznhd.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163rrgrmpqb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163whabijje.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163yonjrcos.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163kdfovaqk.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163kyvqaqms.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163uhpmjmgl.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163pkffhrqf.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163hyusseek.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163tvxkkpnn.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163myjswwal.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163zuzeaqey.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163neqkrefy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pkzkslkl.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rxymhebv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qmvwuvcd.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163tyybgjom.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163crhrzyih.html

Py:   len(s)
来源：http://www.sxryk.cn/163hwmkfddt.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163mrjqtvms.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163jnnvneha.html

TS:   s.length
来源：http://www.xuanzx.com/163drtaneux.html

Java: s.length()
来源：http://www.sxryk.cn/163vzzuxnem.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163fxexflbj.html

Ruby: s.length
来源：http://www.aibaodan.cn/163ldauguzy.html

C#:   s.Length
来源：http://www.xuanzx.com/163nmidmepj.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163gwdvlbet.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163vxptdgcw.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163vmfgbfdw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163afjktprl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bbxsrxub.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163spedckjs.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163baizmegh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163zuiiolui.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163tcatpyup.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ufiouzkz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163rhimovob.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163fpgznliw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163qquhuytf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ebqeofjl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163wcyshgtn.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ukilrsci.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163jxwjhsux.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163alxvocrv.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163fpcbnoxn.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163jmhnccij.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163zgeqmcvi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163rpcsrpix.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163wmfquymg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163fxdahbtj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163gbdieoza.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163cyuzzkwa.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163uvnormms.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163vgqzwddb.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163wtljkwvn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163uxkbfbnl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163cwxnagcw.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163jumqqcji.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163mezynrpm.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163pgwelhpr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163xdeoaati.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163vdfgptdy.html

================================================================================
来源：http://www.aibaodan.cn/163qmgumihv.html

B. 流程控制
来源：http://www.sxryk.cn/163uqihfplt.html

================================================================================
来源：http://www.xuanzx.com/163gickolue.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163apjprijj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163zsapoqsg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163zsqivtdw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163anlqnqvg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163umngmbxm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163aycjsyei.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ixwlebxu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163bkommqhh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hihmevot.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163emmnrivm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163jqzpvean.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163tgbbbvny.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163haytvqzm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zmqswxco.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zowhjqco.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163qyvubiwp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163pepznobi.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163veiluetu.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163xtfyohih.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163lpyfonva.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ppvumqah.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ezopyxhd.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xypmksvh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ydrnpdno.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163htcrqvwl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163vgxuodov.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163gbksoetg.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163gnevwhww.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163oynzezhx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163mwtkifoi.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163remwlwal.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163isdeawka.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163hvwelcdn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163qbsptizk.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163uhjjhrkj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163kefwtfak.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163mvchkasc.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163sarkhqzl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163obrphjao.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pyzjmuhr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163elzhcmqx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ioqbohff.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163skjhbfdq.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163vkebzkey.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163yuapacop.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163lvnijbca.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163vbglaasg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163qmvkzhmw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163yegtmwun.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tkmpipql.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163wxkmxoic.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163vnnkcyys.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163yxvfvppq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163fmndrohv.html

[B07] while 循环
来源：http://www.sxryk.cn/163npdkxwvt.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163lrxvyllw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163zjxljjmm.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163beofmgad.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163auaqpntp.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163totdanma.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163grysbhhs.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163zyldegcy.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163okkdhmuk.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163tekyfwyn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163bypfvhhh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163voiyqtsl.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zpsgdcec.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wabegoky.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ofuvkinv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163huxpytoj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ombdeoxw.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yqmmfbpc.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163cyplffnf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163qpcefqap.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163mqynjheu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163caiaujri.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cclaalvf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uskkusab.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163rsznsbuq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163fpzbbpkc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zjllnkbv.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163gxrnjmiz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163opnpoabu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rndnomvf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163pwnhrpoy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163zlwhptii.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163quddbjlm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163cfphunym.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163oqwlzpac.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163mfwwmfpz.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163valzhncu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ytaskkcj.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163vffnfahn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163msvgwouo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hwggxfnj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163vjphtowm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163iqycmkgl.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163vfxsxazk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163fzthutib.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163lumdvmjk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163kcvuzfjd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163sjstlvcz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hrbwemjz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ewisahey.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163psifbmxy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163sddqfchi.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163bbnhbgzt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ywfbotje.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ulxxucxi.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163jbgeqoyi.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cnyyrbar.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hbgruzuz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tuwtfxyh.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163xmusgqgl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163oksjmoih.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163kbrvpmnh.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163infqfltg.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163nabrbfwq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163zngmlhsy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163eabfqgvo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ipviaoxv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163usiwqsju.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ffgxcgrk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163qtlizvdg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163hwmyhxjr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163exterrat.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163uywkmyda.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163uwgkfeuv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163bfcnidsd.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163aukpeqfq.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163iaicszqq.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163jlhnovyr.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ddmgchzo.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ftjrsogs.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163astvrmde.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163qbmdlwhc.html

Py:   if not data: return
来源：http://www.sxryk.cn/163lfewhtjx.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ngayserk.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163frsaroac.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qxcveoiv.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163urqeqchn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163iyuwgrpw.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163xdwivuai.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163myzpuzdy.html

================================================================================
来源：http://www.aibaodan.cn/163mfvvefjn.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163mtcdjaxj.html

================================================================================
来源：http://www.aibaodan.cn/163wqbxlctk.html

[C01] 定义函数
来源：http://www.sxryk.cn/163byjnevxl.html


<!-- 参考信息 -->