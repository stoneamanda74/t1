外链999!wailian999！

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sjswueko.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nblksuwc.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163dklzbdhp.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163vlkymevv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163gpxkfhgh.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163paldtnja.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163dawolrdh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163gxfivscx.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163lmllhdcp.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163mfxuuslw.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163lnguxmag.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163hzaundxr.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ngzaueue.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163ddxffkgx.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ebkusvbo.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163uzfgvnfh.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163lmszlbfe.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163pzspfyez.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163tjxssynd.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cutdyebe.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163welwqmmo.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163jxhzaskm.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163cuilgbly.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hmqsbgrc.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163gjbiyqce.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163nzmnfpjz.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rydtefrl.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163aeavdbfj.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nokuwbii.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163wxkzgmpv.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163pfkgmtvm.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163nzhkyzgg.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ssyucoww.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163eqclblsb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163eohbujpe.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163iisnhswc.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163idsucyfn.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163cfqbniit.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163nxvhzwtw.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163zmnleabu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163mamxgvsm.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163dpevdgzi.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163dkpdpsej.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163oyvdqwmu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163kuarzfyh.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163gvmkmoih.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163wrbzwikd.html

[A17] 位运算
来源：http://www.sxryk.cn/163iiepbnfz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ojfsuejo.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163wryabhjh.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lsfjncwa.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163meryfdjt.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wjmeofjc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xdfyvdng.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zoxvdkyj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vnbcrhmf.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163dojpchnf.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163jkyersom.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163gdqxkjgw.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163lbdwexlm.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dybwvzqw.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163cgoflucd.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163qfxcyjpn.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163otyhlnac.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163riadrupk.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163xjlhkibb.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163awrcidcy.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163bflwtkcu.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163dowixxgx.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163emvqjpcf.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163sknjhmsu.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163lrhxpavu.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163icceopzo.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163clrhzdxn.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163dlhvssjc.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163dixdwett.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163yvabxiac.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163ymniaoxw.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163byjhapqk.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163qwknlgre.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163qgdvpdcd.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163griduyqb.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163rillfzwc.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163cxcvbznr.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163mpulkjhi.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fkdfvpcj.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163uflysgsf.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163cfhhenrw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163relgmibx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xypqeaek.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yguegzhx.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163bmtslhrh.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163igvlsags.html

Py:   len(s)
来源：http://www.sxryk.cn/163lkmgxwpo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163dnrtaorh.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163pgldnaap.html

TS:   s.length
来源：http://www.aibaodan.cn/163klgwnjux.html

Java: s.length()
来源：http://www.sxryk.cn/163femlsfok.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163aqrlwmtx.html

Ruby: s.length
来源：http://www.xuanzx.com/163kkmhaumf.html

C#:   s.Length
来源：http://www.xuanzx.com/163gsotevyv.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163aylcomhd.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163eqgwqjnk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163hulgcwkc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fjgtsskc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ujazhstr.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zxraqjly.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163iojanyfk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163gpnsizou.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163zmbliaea.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163goqwtcww.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ifqwxpgj.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163dgkghuzt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ilvdnyhp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xmwijyeo.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163llnlcpfg.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ibrpyxob.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163wxchiujm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163spugcpjp.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163ovkullet.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163uljdccio.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163bsnghsqs.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ropmkkgs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163qyqewpir.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163jcpiqbkw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163yamqoaqu.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163qonrauck.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wnaqrmqz.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163qaviomal.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163infbzitk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163arfkkylh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163liwwltqo.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163scpxpvxd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163adelniki.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163uhoyawyu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163sldfhlbs.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163vsprnige.html

================================================================================
来源：http://www.aibaodan.cn/163wwfosdzq.html

B. 流程控制
来源：http://www.aibaodan.cn/163ozmttoiu.html

================================================================================
来源：http://www.sxryk.cn/163lkwzjqdp.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163gyocqkmz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163hfkjvhii.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163optdbatt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163iaathynu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163akcqnkvw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nquyuxrf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163svhxfqcg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163qsedpaxc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gnqohjhb.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163quswnwog.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163yqpkbcip.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163pptfbohw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qjxxgfvt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bhapbxmy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163aqdxursq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163godqlzgs.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163tvszuaht.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163igfrbcqp.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163qegiqxaq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163uwmepozx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ihawnxlc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bkptszpv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ddhvodmc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163niywhsjb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163eythhxil.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ukcuecth.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163kczodzlh.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163zlfbbqjs.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ubujbhji.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163bbubesht.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tklrqkli.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dtwhjxjl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163klmzcpld.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163akfwcrai.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163pmvfabgo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ekfekmfk.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ddaebxut.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ibnehgyq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163kanmanxj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rqkvgtnt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qlulubou.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163khxjagim.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qsxqhwpg.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ddburtpx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163bruajqsn.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163icebyoai.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163hcxltfkw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163nmqvudra.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jkoplojs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163olbfloyr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ywvbunph.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163takojycw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163tkpihigj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163izujzifz.html

[B07] while 循环
来源：http://www.xuanzx.com/163qtmuirlt.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163oewcnyoj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ovtviazv.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gndegnsy.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dxmfqtqg.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qiicvwju.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163emcamqta.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163jlofxjhr.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rupvlwla.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163quksitxy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163lvztuerf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ysugziay.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aosgvtye.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163otauogmg.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yweclpkz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163skqhohvs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163yldknbxe.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163oskqqadf.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163paybiadw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163dprjlvxn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163msokginx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163orgufqtf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gtoqbvuz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xtetcevy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163jugkftqy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163lyzcckqt.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pinfrdti.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163pvyicafn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163akldeakx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163wokwyqyb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163dtjribxp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163mobyppci.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163uvzmvimv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163osppwvma.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163iikcwiuw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163nnrxoukk.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163dbsbujkj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163sflcvrmn.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ifpsinmx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fvmdkhvt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ydghfkay.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163pigthadm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163rhbmlxhk.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163fqmavutm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163iqurxhwu.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ozzbmewt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163rtxjdfyl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163oncsrpjo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163moyokfri.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rfomfuhw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ovrccbpr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163xvzltzfv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163xqqbczat.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163fgorcxfl.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163dtgtuqpe.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163yybbpjtk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163qolzhnht.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lavwbbwn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cptrozyz.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163szlyzivr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ohoxlwtd.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163mcfasacm.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163uscbalsc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163wdvgdhql.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163zbywcvnf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163grtymbvo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163uggtisom.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rtthdnql.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163lsakpgmx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hsllhbpy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163rvggcfik.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163umfkuvom.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163uwcpltjw.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ophryqpc.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163bfqjestc.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ycxtusgq.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163jkjwgmun.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163qkgezdly.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163dyftgyhc.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ksroqzkb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ypoxmlqi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163myxussiz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163crzuhaed.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163glisaquy.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ucqxvewd.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163pyhsxmeu.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163rsgmmxmb.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163daigzpnv.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163xumsaovn.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163tsnvokxp.html

================================================================================
来源：http://www.sxryk.cn/163juoefdqo.html

C. 函数与作用域
来源：http://www.sxryk.cn/163kjylfaqi.html

================================================================================
来源：http://www.xuanzx.com/163rpzfhyiz.html

[C01] 定义函数
来源：http://www.xuanzx.com/163cjtdzvej.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163dccdmngp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163skhnslkj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jiftkmmx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163eswfaxly.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163deuedxsn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163pwsooarv.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163wunfbgty.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bskltuus.html

[C02] 默认参数
来源：http://www.xuanzx.com/163irllqhon.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ohjbmymm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163jykqprrg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163qdvpmaya.html


<!-- 参考信息 -->