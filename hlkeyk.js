外链999!wailian999！

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163xknwjeeg.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163vmhuverk.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ovtzymge.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163yyypjjyf.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163jiarsjru.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163bvjctewb.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163cjxxfxpy.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163pvrstebb.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163uyztqbng.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163spzqpmml.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wkbrnvle.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lwrofgrh.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ymwkisau.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zrgukbpc.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163shhygrir.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dvmpdsfx.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163dracbsoh.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163wzalosfu.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163xlejwoqr.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163icgdjpzh.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163kbeeiaet.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163vtzibtte.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xdcegwnq.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163cejyvpwy.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163bakdbhlk.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163mmhmvium.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163oalxiwck.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163ctngxzur.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163pcotekgp.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163hhtnwwmx.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163xroiavtk.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163juaqpeax.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163iewsnuma.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163whiaflht.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163cuuvtsff.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163aesxebww.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163gxxshvmy.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163oswanahz.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163mpixlbru.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163tgncuclf.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163meklukhp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163cmqvfgsf.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163ahainrmw.html

[A17] 位运算
来源：http://www.sxryk.cn/163jqpjkatf.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163swjkdmsj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163bdxfqmdq.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163sejrbhzf.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163hovwkqqz.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bnmwedby.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ueirjddo.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bqgxczpm.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ehrufcgv.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163ufbqgler.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163bufhblas.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163zickiduc.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ihnaxqwu.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163aftenwuw.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163zbjsldyr.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163aquxfnts.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163knkuahak.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163dltiwekl.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163bdyxaopj.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163htqkdyiw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163wyvafbsq.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163anccukex.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163wbiikfwz.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163nbohxtkj.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163lmatwmah.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163kmpfomsn.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163hrygrxgw.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163kiemyigw.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rxituzoi.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163hugcrnma.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163crtrbuvc.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163frcbxqtp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ttriwxfh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163xpoqdbuh.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163chdeoyea.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163dnsgjttm.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163uehxzmbg.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163cuiflfra.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ramwhioz.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163hiwesbvg.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163acjbdigj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bmovqkgf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ysmxuthj.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163etkhbgjt.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163tejufbwa.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163fbretaqq.html

Py:   len(s)
来源：http://www.xuanzx.com/163vcexdeue.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163slzqtnyg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163znxykjyr.html

TS:   s.length
来源：http://www.aibaodan.cn/163vhourcrv.html

Java: s.length()
来源：http://www.sxryk.cn/163kcagnwaj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163nytlhfdz.html

Ruby: s.length
来源：http://www.sxryk.cn/163qmlxcgbw.html

C#:   s.Length
来源：http://www.xuanzx.com/163wvyyaywh.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163eoegvkik.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163uixkakoq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163rpoikzti.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163mwgolmpu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163exfdkoot.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163irtbpqna.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163eilviiwb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ozihnykj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163jtmuyjjp.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163prsbqzjs.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163cbvpuizx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163crwccbar.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163lsqujtlv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163scgnkxzu.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163lqzrbqnh.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163eembiscf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163xiiepmib.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163fgebdjzk.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163xzjyuauo.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163keetysxu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163lfbdxqeb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163rxujlxqn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163aojyfwxg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163aeqfrvov.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wrasbpvn.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163xmmzbiwr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163lwozeznf.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163sayocfzm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163veevtvcm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163uncowomj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163pfumnhxw.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163nhcnggzp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163yhfeazjc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163fytciljc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ezkhivyk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163tyhhxwhs.html

================================================================================
来源：http://www.xuanzx.com/163bkcuzqpi.html

B. 流程控制
来源：http://www.xuanzx.com/163idmojhrt.html

================================================================================
来源：http://www.xuanzx.com/163vqxkgewi.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163tigyidgu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163hphtajbn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163lkhgauxj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qnbfeebv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xvvsmhmd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wnthrezz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ltkudrsb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163jihzhdzp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163odkqolda.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163uvcoknrl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163xyzhsoqr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163pladydaa.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rkvzsmgo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163relqsfsl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cpugrqlp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163jmmvsrsk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163bqnhsrzy.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ymmokbtz.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163fsyefzdg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ihodleho.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163vrzqpmzf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dpxigygd.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163licpkmrr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163vscnvdxr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qzteuhmn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163idavjbmx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163zprbztmf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ehotekhv.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163nypilynx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163qcpcokhx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qhtknmah.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pfhcnkph.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163mureevsz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163oajryszi.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163oygaclez.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163lqrxlxfq.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163icfumkhs.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163nvgjcxwr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163bzcobqam.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163enizogjs.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tbqsmrqn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163uuhjqbfz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ytojwojv.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163javupaaz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163zwibqeve.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163shvnpzgr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163noelijmx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163pxxyoior.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tncjawoe.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fnmuzpwn.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163eotyeeop.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163tatkrayc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ijwbrdzl.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163xwddxjok.html

[B07] while 循环
来源：http://www.aibaodan.cn/163nxqtpkav.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163sahbktbw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163aelnyzmt.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nrrrwqnw.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hcdqwrll.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dxpnodjd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163rbytzygw.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163lnibumtc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163womtmfkj.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163nwvysyeq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163hjyisdcy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163vttxscpg.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163scevofmi.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qifxzcbd.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cbqskeen.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163yyjlxnlp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163fmomumev.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kfkpdssr.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163kxdrayvu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163jskzswud.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163copnvqgu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wyyzaesz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uyddaqss.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163svcmntmi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163hebtabtb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163yzrzpjbs.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dnawquej.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163rengyqyo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163nreqftjd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ewthqnra.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163cgnhrcxa.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163poaacghe.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163lztozxtv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163upahputp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163usgdxlnu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163spuvcnma.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163vffnlbqi.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163cdwisfcf.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163drxgtfpn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mnzmpnlb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dgwowrcy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163crqzwvcv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163hncviqjy.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163aftamxnz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163vrkdwdvw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163qgwtjpmc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ylxvybvj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zwlikhlg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uykmfmyy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oazoygxh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kkrzbcoe.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163yscbaoif.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163akeuxcan.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163vvzkwhko.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163pndplhfo.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163kdgrlpba.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163hvefnouy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vklgcgle.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ryyidejt.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fmmuzeym.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163tdwzreco.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hpmwljzi.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ceaefvzi.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163gueeepzw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ejxjhute.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dfuljfta.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hscufjan.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163yeitxmob.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163horadrjc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ttzgckxm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163eexsefuk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mompdeip.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163awvgqdja.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163bzzocpef.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163utfaukav.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163cqctvoig.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163lkafnayk.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163zmurlfuf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163fyrnkvav.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163enukokda.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ntftehac.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163jcdvgcnc.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163yqtbnvrh.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163odgbsurz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163bxvuzxpf.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ynjjvefd.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163sjppdwdr.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ghvtrrrg.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163fiurmnfw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163pqpjegnk.html

================================================================================
来源：http://www.sxryk.cn/163dcfkaccl.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163dwxaolbu.html

================================================================================
来源：http://www.xuanzx.com/163ejudloic.html

[C01] 定义函数
来源：http://www.sxryk.cn/163hymxvnky.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wpfkevpl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vcwppfbb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163lcdtrpgq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ctcbgtau.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163aptannjx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ghulbxgz.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ysttknzh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pltkxfna.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163tlgqhrzl.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163xmfqhyta.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163vrfwpsec.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163hkxtdfmg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ttqantey.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163iumaaarw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wxjoxbta.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163bovmcqoe.html


<!-- 参考信息 -->