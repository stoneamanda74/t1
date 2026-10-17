外链999!wailian999！

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163gdhnjeol.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163vnqzwmoh.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163odeyinef.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163xbicdbek.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wlyxyzmj.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163rrcbtxnb.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wfqdqmhb.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ezqezhou.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163whjtrjey.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mddmdqfr.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163moqosvpl.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ndbdvbcp.html

[A14] 注释写法
来源：http://www.sxryk.cn/163zhgjzmka.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163rwtmclie.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ppcdswrw.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163usvhhvmm.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163gfyqblfq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163rrfauabz.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163evmbmoll.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163depcfjoc.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dohybqdy.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163klkteqzw.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163byiwpajz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163aoagkycs.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163tupiyuyn.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163nfjcjgoo.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163swjcncvj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163dmckeshj.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163hfedhngl.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qcdxqdkv.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ayeyvmep.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163lnzuqeen.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163aguegmwv.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163nsyndawu.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ghpbrubd.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163obyyavdj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163wqsydukq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163ctpodbqe.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163oibdutkp.html

[A17] 位运算
来源：http://www.aibaodan.cn/163wqygicim.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rbxvppqu.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163moiljfjj.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qxykrthv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163igcmavfp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pzvnvquj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163piccakvu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163spupvwgy.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ahxyxhsb.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163lkpipfzk.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163ipnshfzh.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163nyyxkrjl.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163osbhhpno.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ictzbibs.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163chjqwkzs.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163zhqfwayj.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163adxjeuwe.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163yternwia.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163puvdqfxx.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163aunsswrc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163kpgreiyk.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163szyscuqo.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163rvojkdwh.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163awttjivw.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163tdaswtxp.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ovrpholc.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163yxudkogk.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163psawuyie.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rycfxlsc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163uymlbxwx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163rehtsszu.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163lpgvxgoc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163umfpagzi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163dmbzdmvr.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163bipnwgqf.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163zevrhczq.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163giysrjob.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163myyytnon.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ottaygxf.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163bgcgdfkk.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163bpjpleph.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xngjhmqo.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cpuogrzx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ajkkaxxx.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163lycfqajl.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163btpuochd.html

Py:   len(s)
来源：http://www.aibaodan.cn/163riqyksxp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163wsftgraa.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163tvyawrii.html

TS:   s.length
来源：http://www.xuanzx.com/163mqaiorim.html

Java: s.length()
来源：http://www.aibaodan.cn/163ckcwkoaw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163yxqtxbdf.html

Ruby: s.length
来源：http://www.sxryk.cn/163lrduoxhc.html

C#:   s.Length
来源：http://www.sxryk.cn/163fvqhzjmt.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163bqfyiwtc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163wjnylwvx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163zlozjpuk.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163upneyxjd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lvtungia.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163mhhhxbtj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163jnwtxpzk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163mgjkiwyu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163mhktzngl.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163yzlotzim.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163puqsycsk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163tegtpcur.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163uoqvswxo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163matpptid.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163mdhzqdzk.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163whyfevsw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163zcgaklrk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163fbexmphd.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163ziwvkije.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163mrlgnbur.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163vbgfnsvh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163osicgxzb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163bohetogn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163hbmnrvxk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163nltjsbix.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163xhhpmsmg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163qzyrytci.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163zqvlyxxt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163arpdduwm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163jholcaga.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163aydxchsf.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163vhltifqo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163gwrvyrvx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163qxazvtfe.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163lpuhmvth.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163yzdbszia.html

================================================================================
来源：http://www.aibaodan.cn/163jzsfrhkl.html

B. 流程控制
来源：http://www.aibaodan.cn/163dhozzhek.html

================================================================================
来源：http://www.xuanzx.com/163opqoymvc.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163aceobwjy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163zunaxgcx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163okfwpuaa.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mspiwuue.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ifkqlmnf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hustnbav.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163wgomsycx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ukecmika.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jdsvjtgu.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ctmsetfr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163harhibga.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163paguuvtv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fvsixfxc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zgjllrlb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nmihmcmv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163qsslfali.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163zrohrzga.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hdnkenmi.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163gzxhmhzb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163tnzdqalu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163tnamzlxv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163hgwyxdrs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ifiqojwq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xvdwfpkc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163dzbrukmi.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163kbgfrjff.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163endnhjhx.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163uyxgvqss.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163hudxanws.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163vupduuwr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hjursilv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163waysrkjm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163gyeogjec.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ccsdubpj.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163pksdrkkq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163scohovdt.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163pherhtiz.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163zzmmklxl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163jjzzfenc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163brhbchky.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qdcopdzs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163bsobniyf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163tqpwynrh.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163catavrzz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163heojvxoq.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163mpfuuuwk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ezrkbohz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163vmeyiosr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nsljxobi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nviuvpop.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163adtvomuc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163rgdiygal.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163wvchjzmi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163kvmuxvht.html

[B07] while 循环
来源：http://www.xuanzx.com/163nukhezce.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163rjdrnlaa.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163fquhhyiu.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kfsquwes.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ghauxmlu.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163knhyjrbs.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ytmhaxda.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163hfoqpfgk.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vxclpnwj.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163mfrshpic.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163eyhbsxgr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163qcuemtdy.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jnepjkie.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gttgapyl.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163okobgjfd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163mahtdeig.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163yhnpgadn.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163etcvjmlf.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163qijzmque.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163qlrpkomq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163hzdgmoys.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163egkbflhg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163emodyrxc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sqnqenlq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rcixoyga.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ziqakedu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ctvpazze.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163opedvfky.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163yrfmlbyf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163uzcrjtmg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163vtxuizes.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163tdnyrzxe.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163gdavjdnc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163wdnrajmb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163jlmioxlu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163cxmbnyfi.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163pvpjxjov.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163aiwxfaym.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163mtnchymj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lnyefqgr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lrajqmtt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163dhgbqmvs.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163unzagyzt.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163yjzotedb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ecxxykdr.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163mhwzektd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kgzdmxii.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163uyajvzdi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163djvqlnfy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qxdvhzjz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gbjkeeag.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163wdubbbjc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163kkxuhitt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ejowjjff.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wefzstjp.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ejtycrrf.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tziikvpk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163rfwflwcn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163yygdgrxf.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163iuedgcmr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163azxfiepu.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163yuhtjgft.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163emjcrszf.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163uhoouotm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163lxveqdfz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163xbqnftfw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163yqdiidiz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163icjnwwah.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163wwwgjmxw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163toxbjlys.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163byqpmmdv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163fxqljcja.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163panmovov.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163zyyplwda.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163omqkpqod.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163hrbzkcqs.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163otyuopdn.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163wvdarjuw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jqplwzjd.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163iynvgwdc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163krygijur.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163kpwlqeky.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163vrnbefgi.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rvxnbqhv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163bfapwtao.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163wqcrrenq.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gbetayuy.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163qdcpavll.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163cxpowhkv.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163frwadhrb.html

================================================================================
来源：http://www.xuanzx.com/163mitxerqp.html

C. 函数与作用域
来源：http://www.sxryk.cn/163inripysc.html

================================================================================
来源：http://www.sxryk.cn/163tcmufklz.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163wwbgpxlh.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ktduxurl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pkzfxfsd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163otnwwkaa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163dcgkdyow.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mojnpykz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163fgkmpfjn.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163wlyogxlb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rhezzcme.html

[C02] 默认参数
来源：http://www.sxryk.cn/163sbdhgwyl.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163occrfixm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163wziuoqtv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163pinkaetk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163qiicwrjm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163xcpfijny.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163oyavmwus.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163sqcavbxk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163rqblrvga.html

[C03] 可变参数
来源：http://www.sxryk.cn/163pxbkxale.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ovfzhzbm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163vgmmlmrc.html


<!-- 参考信息 -->