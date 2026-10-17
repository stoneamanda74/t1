外链999!wailian999！

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ikncncbi.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163hlmytcvm.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rdgsfdrl.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163ylinkoyx.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qxdxpgql.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163zljdfbct.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163vnbmyayy.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163ucivmcqw.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163iurwnavv.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163kausttpu.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163gspqmeea.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163duozqqbq.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163onkfiiom.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163dfwbhyae.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163zwvctgmx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163nsxgxthz.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163tzqywqel.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163rvhtkxwp.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163tyrcrqhs.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163rvcpsrhl.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163xewkpauq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163yknqnugb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163exrsynwn.html

[A17] 位运算
来源：http://www.sxryk.cn/163sxembyde.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pufcixgz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163xahhtxid.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rrmjhqec.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xyyatdgn.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lxzffepy.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lxzahxbx.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ijqoqdnq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qmfsdblc.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163hpnobkay.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163juwiajtg.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163bzefmewp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163lvaacayr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163nwuxzsxw.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163fmfqxphf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163rpfapjlw.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163rxclnqwr.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163bygaeuni.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163nkqaooet.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163dzsfappn.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163lmfxtyds.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163iqdgipzd.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163qxcoueus.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163zqqqigpf.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163xnfgqrfq.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163cinxaaby.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163julyigpq.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163trvbbtra.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163yqlxydub.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163sngdytyi.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163arghdbuv.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163shpyckrz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163wolhvdhp.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163oxvluyrj.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163umbafwjn.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163jodognvv.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163vlvwhzrc.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163nmywlbiw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163emoorynq.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163tnnqagdz.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ejajlcnf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163huquefns.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163oszxlurg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tetxclsz.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163nqtjgegg.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163uhpiejhs.html

Py:   len(s)
来源：http://www.sxryk.cn/163yqvxuhmc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163cgwgolhg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163hmyppnrm.html

TS:   s.length
来源：http://www.xuanzx.com/163rqgfufol.html

Java: s.length()
来源：http://www.xuanzx.com/163diwrjhai.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163lhdqadky.html

Ruby: s.length
来源：http://www.aibaodan.cn/163drzuzvmw.html

C#:   s.Length
来源：http://www.sxryk.cn/163vhcxhjvd.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163padavjaa.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163qbxiefhg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163aqsnsjag.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163cuuxhobn.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fjzzoitk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lfyqppxm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163dhjsavdc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163lwxhulua.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163myyssurs.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163mosdbroh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163zxeahaex.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163tgefgzdr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163iimerbsl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hcdsxnut.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163wldnhtgf.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163zkhfqkcr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ohqsgzlm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163rzygqrdw.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163bgevvoxv.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163bjsudwza.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163srpeumdh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ncdiqswl.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163mbohdiyi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163qmbdnlsz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163uglhbdov.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163tkrvgzme.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163gzsvxdgm.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ztvvcelz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163xmenohlm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163wwyhnlem.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163huopmras.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163dkaqgdom.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163duhealyo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163tkouaunv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163jtmxaxby.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163wsirgfrh.html

================================================================================
来源：http://www.xuanzx.com/163oypiiczq.html

B. 流程控制
来源：http://www.xuanzx.com/163kgnkhaoy.html

================================================================================
来源：http://www.sxryk.cn/163qzpzfroc.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163zcqtrtun.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ueitesvz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163zbenfpox.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163smnhjocg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163becaxqjj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wujcfsnz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163eqxzmzce.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163fnsuelzb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163sysajoht.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163dvvovbgb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163abwcxomm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ikxwtazv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yevizbvh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163anliafqz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vvgcoigw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163naphmigf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163nxobarzn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ytdhrkgm.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163cgsvkiwx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ukoddeve.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163nknwtkvx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bmiyobje.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163eyablpcl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163boyljfrq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163elmodaac.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163crkqpyhg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163vfxlmokd.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163iatcqeln.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163pusqhgqf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163fxapfsmo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hthdztva.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dnkpjteh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163kdqhueuk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ggxhgcgv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163roveyqxs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163xljjjlrr.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163mmiettdl.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163qxydpzwd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163hqzzoies.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163aqkmtzey.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ibrecsgd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163dapdbudq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163slnyghfp.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163okjxejwt.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163pibxscyw.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zplvjsmg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163zrykpptg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163uwjcqggc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tshqirpd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163enicextb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163adbebvya.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zcucgizn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vggsdqjn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163lwvauibz.html

[B07] while 循环
来源：http://www.aibaodan.cn/163bobjtwer.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163hfildalh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163fzgljgkt.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hmzcgwke.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gfhnmrui.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hqhixfwi.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ufpmjgwv.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163tbjzqsru.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wvfphhgv.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163thppiipv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163eavsuwuy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163lhvbimok.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jfkhtwqg.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kuwhsudn.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163omwwfhft.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163mwbukrmw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163mzroahah.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vdnuxreo.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163islsupxy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163uuxdgzip.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163txdrojkh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zgbkzhfk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nnwlgloh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qebyyjkh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ktbrhehq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163fzdvhbct.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yeoyrihh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163bmwrpuzr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163thoqjlrz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163bihjhsuh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163wcaujakp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163irumxfhg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163tcbjaced.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163nxcwcwet.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163gwefnqkh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163edkojpuz.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ixyasbyp.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163kazvznvi.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163stfrcyxq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wvyqxkig.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ukmucwqr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ooalzxno.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163hqrcdcrx.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ktxylvia.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ggpmrkit.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163jumlcjhr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163obqydmzv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nkmuobdo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fsexjexc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163waypxuce.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163avnbircd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163uhstullp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ncjqslsv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fkrlsobw.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163prfplfzv.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163tvgaqstp.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qljnfqzp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163sbevvyoj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163udjohwxo.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tkagiwby.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163omttnbyo.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163rmlzqtow.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163enqpivuy.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bqifathr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163irqcorgv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ctycvrge.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163pscdgxdf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wtsvqfwl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ajqsgjod.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qqpqmiss.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kpxmsmxm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163whhnnbqz.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163vsnxfwsg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163warqjqwz.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jqksajti.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xerectin.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163xofoopkv.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163jlvvxnjm.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163tginljzn.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163thbnfgbz.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163cwfbiafr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ioionyoq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163zxqxsqpq.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ftutgdja.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163rlyigxxw.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163yuwymcvd.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163iepkibtl.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ougqbayd.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163syibddgd.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163khxxguwe.html

================================================================================
来源：http://www.aibaodan.cn/163mkelmsuz.html

C. 函数与作用域
来源：http://www.xuanzx.com/163olfwsvmx.html

================================================================================
来源：http://www.aibaodan.cn/163lcjwpfrg.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163qfsfwztq.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163sqfincpa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ptfpfvtm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mtishvsn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ivnwrqlw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jxsvdpta.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163qszfubii.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163tzpvbqsl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ecrzknef.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163utxjxwtw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163eixqxhuf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163yzpqpfzo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163vqjpwxpn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163pmrsoimb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163khdnpfrg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163scnzegsm.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163cdpolzsq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163lxdjdzdq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163xzimeohw.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ipyacsha.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163kjxxqdmb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163pkvjezwn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gousjddm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163uaqxvfkc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163brkizswb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ylzwcizg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ctbipzek.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163nwjyvilf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163yvybkowa.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163llwdrdyt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163xqjvitjr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163genkgksg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163volxryyg.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163znfzsjrz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xhrxzhqi.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hnbwmugt.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163iagpkhqd.html


<!-- 参考信息 -->