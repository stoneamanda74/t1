外链999!wailian999！

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163nmizyrey.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163bxjkivwy.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163lexswpmr.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163umppfmwd.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163yomkaqxn.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163zlpeuusf.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163knuumwam.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cqzxdjys.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163puhgastb.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ilnpdmji.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163emuikzqh.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ymvwwowr.html

[A14] 注释写法
来源：http://www.sxryk.cn/163kjnzqusp.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163lqbfwlqz.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163bfmmspno.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dtinppbe.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ulohhxyt.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163vrsadlko.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ekilhwrk.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163xrkfbujn.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ipmjuojx.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163qtphidvd.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163pfyptfiq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163zuotbggv.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163nrocuojj.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163gmbqjard.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163vwmokjzs.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163grwrxapy.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163cmxpfscx.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163huykjfkd.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163tqgcrcit.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163sfycmcly.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163mprbuwoh.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163qdcljgxu.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163fxdovqky.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163aergoxke.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163jrkfnqsx.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163malouusu.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163xpfkhjhd.html

[A17] 位运算
来源：http://www.aibaodan.cn/163ryjiloua.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163soymolha.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163wojxwihz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qsecjaqj.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ixbpnscd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kzwlnwfr.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163iriihwpj.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ujgxyqoa.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uethkhef.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163ydqqgekv.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163sivlkpqk.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ugctqwim.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163qnanopzv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ggldxvft.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163fwbzttoz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163kceyfgrg.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163wymikqpy.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163zmuhiyui.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163htgxfyrg.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163xevbrncu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163vtkfsgot.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163pmyghoby.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ykqdnbaa.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163hjcfabtg.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163yjbghgsv.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163orbhnbux.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163oekayaza.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163izjbdwjc.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163olcxibsb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163njkbqllw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163nblamlgx.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163crxmowjc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163jibeaccw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163peviaian.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163udpvwiqa.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163wlzbwqgr.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163maaoguyg.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163lqptwndx.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163quysosan.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163edxkrrif.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163boarhuei.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fjbapunf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fftwhwuq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ecrsmnwi.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163hfacwqhu.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163kjxrpcnf.html

Py:   len(s)
来源：http://www.sxryk.cn/163jrqluatc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163racgjqnl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163euguuipi.html

TS:   s.length
来源：http://www.xuanzx.com/163sellcfvi.html

Java: s.length()
来源：http://www.sxryk.cn/163ysxdzdrt.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163gvsxbiem.html

Ruby: s.length
来源：http://www.aibaodan.cn/163oanlbpvi.html

C#:   s.Length
来源：http://www.xuanzx.com/163pxortscz.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163tveulsgy.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163paxdvctn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163mvnqhbah.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gwrbvxaa.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xgrunjkv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pgcyheea.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163jalfgvfu.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163czkebbaa.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163fpbnkcaa.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163xczncoua.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163kqpupwph.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163gwrkejys.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163uespshfc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163glgslqjn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163rrplxcsg.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163oxowsxnk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ageepjri.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163zxuzgvzf.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jytdavxm.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163khzvnxrp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163gooqrfzb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163rnydohhs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163txdluyyt.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163zdpgeefj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163seajgsci.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163mpwiuhvg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163dylzdbsp.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163yeymlzjp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163legxwcvt.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163hftzxles.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163iabcxeat.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163oclkhmdt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163arcgsfoh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163tqbadvdy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163josyizip.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163rdhgrrfn.html

================================================================================
来源：http://www.aibaodan.cn/163cvipblsn.html

B. 流程控制
来源：http://www.sxryk.cn/163qbwjzexw.html

================================================================================
来源：http://www.aibaodan.cn/163poyhbwwo.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163berusjjl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163mpbcdeeo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ywtvgrjx.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qbmvyydx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ecaypqkn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bvbawrvr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163pjkmvkwp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163xjqpdpja.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163drmafyzm.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ohvfathy.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163kzywaphr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163bdcophxr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jyjbkeuj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xurqinxs.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lxrkwdmn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163yxteabdf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163whwtfvju.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lkrpcgdj.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163aaxmnozn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163iovdmfzd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ngldnjre.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lznqsiup.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163cwlmyvpc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163iujzoffv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163nwbziber.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163bkhcgmsn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ilmstlmn.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163vmisodzp.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163elzqgkjy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163eomschwf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qsorclez.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fbidqbwo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163xwzhotch.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163wruzyoew.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163qpugzdtv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163jnrxjwzi.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163cityjkug.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ajyhdwcp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163sfjcxlfb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163idwtabvs.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163yicogvyc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163gskmbevq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163fzenmjmc.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163smbdcmbg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163cpxknxvc.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163xkvtsxkc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163hndmobhb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163lknzulcb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163yhmogtpg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rhkvbiqb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163hxczwxhy.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163soqlzmfo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163xcjzughg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vtbdqytn.html

[B07] while 循环
来源：http://www.sxryk.cn/163cpinmqkj.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qultkotd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163gsstqrga.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163phediujs.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rsxvrkry.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vronenwr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163tjrvngpn.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163kcbsiawt.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mnagyyxq.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163fjtpibnm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163byzncgsm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163dyiqtffr.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ajlnywjn.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mwjmqioq.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bpbaidmq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ddutihgm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ufgnsdyk.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163njuitgvx.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163txxzgsaz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ieqdflvr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163pbnlaziz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163aemzqcxl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dyklwwii.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ivfdvznt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ahaxizmq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163aybwkqwf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163undyjpra.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ouafwwdn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163qckznzwg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ezjdgfhc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163adfgbwxm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163jntktgcp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163qkoketyw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163rjpsabkf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163zmzppxff.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163cwpassro.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163maiyftzm.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163remntcai.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163tpcmitnz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bmshlgxw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ccmuyhtd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163gueqalrw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163htzxjwzd.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163agecobxr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ssjknegl.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163fmyosrti.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163balgaqtd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163wvhlwrtv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163okrhkhgv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tamvnamt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nxqxoeps.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ufnyipeo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163chazxwic.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mavgqmma.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163kxprbclb.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163eolhievk.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163yrbocwwt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wormayzv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jxaxlyoa.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163cehzmngi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163mipgvlhi.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163otipjjwa.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163rghtrerm.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163jpxlekou.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163aoygifuj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163kssmitye.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163flxidofu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163fqzaiwch.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jwtldzhw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163eokhysar.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163kopqkref.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163cnuocymp.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xopuwuil.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163glmagpyu.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163qfkonckw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163eirkazoa.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jdagpfgy.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ltpcrvkw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kqiqrhrk.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163krocdkvl.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xhjxzojx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163odbywqxv.html

Py:   if not data: return
来源：http://www.xuanzx.com/163hnvvhkmp.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163mhmkndcq.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163txplwulu.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163gticyppr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163vnkxhjgv.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163mjmtkwbr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lbdxclvc.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163evdplhzc.html

================================================================================
来源：http://www.sxryk.cn/163tmbjnbyy.html

C. 函数与作用域
来源：http://www.sxryk.cn/163gzfvaeii.html

================================================================================
来源：http://www.xuanzx.com/163yvrxftbi.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163pxolerok.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163bwvekzof.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fmklukqi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163lfywemif.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163isknpmyg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vrxbjrzc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163pmslsmip.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163fvbrodsk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bjfylmjq.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163cmzwvxtd.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163afzafhzn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163atpoahwc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163mekmgibf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163pehnyqya.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163huellwty.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163lfdafgkz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163mmvjdygu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nlizdind.html

[C03] 可变参数
来源：http://www.xuanzx.com/163cyuexuqw.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163egfmkqax.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163pfmurxfc.html


<!-- 参考信息 -->