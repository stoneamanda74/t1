外链999!wailian999！

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jlhykirm.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163idjnthzn.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lofgnikn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163eijjkxfp.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ppixjall.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zsrppyhu.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163mpnpscar.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163xnpehowb.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163hcllukra.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163uopnrvts.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163odeahuky.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163iwuptbnh.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163zdaprtcf.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163wcbgbsps.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163uqspxupm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163npamabpx.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ttbtxzpq.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163chvahjgr.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163uukppubn.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163acoxxsah.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163rrpmkbza.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nwueudkl.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163rqvtykqj.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tfpqbyjr.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163rtyinivt.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163uymywjsk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ylrblpwf.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163sdyftyxj.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tfqljtzd.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163gmxsjnpg.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vvrddoyc.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163tbsrqqxg.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163nslmvfsc.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163urzhcuce.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163rtcdlccj.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163wamralll.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163izqtkdsj.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ztkxgqae.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163qwxqdist.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163rudqjzdg.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163wfzkzgoq.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163cirgsuvx.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163vvyipwmu.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163njgomukz.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163fyvjoefh.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163gpyjrdvs.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ejvuxgel.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163tfoozelp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163xwmhjutr.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163zkdnjjew.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163gabuwmbw.html

[A17] 位运算
来源：http://www.sxryk.cn/163vnmpyigf.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vcrcqheb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163qzxbcxzd.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kshqyoyy.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163auhxkhay.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163msprcpfu.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163prdqjbww.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qbrxzwqh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mmklilxj.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163nhtdplas.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163gioaqjpo.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ubaxallr.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163bdxmjmob.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163dsknqlkl.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ldherrex.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163lytilkri.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163appvebck.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163nugoidvw.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163qjpxpahi.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163jtgkibti.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163dzrulqcz.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163lwtbxtur.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163rmzjikln.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163gftpqndr.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163uzpbikiw.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163fjspsthv.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163gidoxkdz.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163elbnlmiq.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rmefvvpd.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163tesybgyi.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163umivztxi.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163enckmyan.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ygqmeqnc.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163efxkwhtq.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163bcoxelcc.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163wroytzsg.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163zfnwzfac.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163ilfrtikm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163sdflicfz.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163qchxcgdl.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163nnlqmybm.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pqyyiyum.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dlnbctpb.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163arayhijs.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ddckzbah.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163xsgnmsdb.html

Py:   len(s)
来源：http://www.xuanzx.com/163dvgsnrcw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163nlgeuoug.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163panaafwa.html

TS:   s.length
来源：http://www.sxryk.cn/163yqgbztfn.html

Java: s.length()
来源：http://www.xuanzx.com/163lhenjads.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163deanszrk.html

Ruby: s.length
来源：http://www.xuanzx.com/163gdtpjlip.html

C#:   s.Length
来源：http://www.sxryk.cn/163skmvfqhe.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163awhtvvrq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163sdhtkxwa.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163tgvjhwrh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dpoetoam.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ikaczwpl.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pophyrda.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163pbenlpfr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163zghwekpy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163opbjlzvp.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163qkohchpx.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163cismtvcn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163zppqlunl.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163nynrumfs.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ebdzjlpj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163umhkuhkz.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163jgflfpkr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163fyiogkfv.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ggpykhri.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163mtzttatj.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163eapgpiie.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163kaucpiiu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163bvkyniow.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163jyadmmux.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163dbgpgvis.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163oiyrvtus.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163vsppgaoo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163bqyppbuf.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163qxiaceks.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163fkxnzwih.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ndmeodpw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163utqsubcm.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ckfyhtsz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163gvdpzczi.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163tyrpbseo.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163zlcykpdd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fogcblkm.html

================================================================================
来源：http://www.sxryk.cn/163jknxruhi.html

B. 流程控制
来源：http://www.aibaodan.cn/163ckgtkbsc.html

================================================================================
来源：http://www.sxryk.cn/163ybaffftk.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163pyxpntfg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ymnorwmd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163tglcdpsl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mvadfkod.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zpnbgqsg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yrwwcwob.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163mbjxvyhq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163cmannnnm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mqhcjbhb.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163yttoqros.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163hxmarutt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163dauqdmjc.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mqhqzmhg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qacfwets.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fpvdbxob.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163vwsivdbv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163jwzwhdpo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mphlkgvv.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163bthxrjdj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163xacultbq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163jczoijku.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163akxftcfg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ficeenzy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zosdhfwv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163bftrvnxr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163eaopueiw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163adqhlzao.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163fzjejdac.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163qlvaevpj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mdbssvhw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lqiyaday.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ofzybmtm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163bbzamomm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163tlfvhacg.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163hycewpdq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163gufyviwp.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163bajijyjd.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163xotxcrfz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163oheqjqfp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jshxnuhn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hnganwon.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163sxowgmow.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163etqbeure.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163hqerqmnh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163effimqpd.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163oocvzaae.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163pnrrqbyl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163gdrhyovl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vunhphfq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163khhyczpz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163yvogewlz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163kbpngysg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163iugfenlo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ydstokkn.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ovqwsuoe.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163nhgmzglq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163kgzajagw.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hwbdtssb.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gvnmatjz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163okozpgfp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163jhnlsasn.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163qsknxsqv.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qmjwosbg.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163txpqdvmk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163elgipzcr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163nigcgeic.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kozeldej.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nthwzzum.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ouparroq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163vigyqvjp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163fvxdhwwd.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yphrstqu.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xotmbqrt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163zocoxaqs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163yxotwjvu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dqvuxufa.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rghbxyck.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qpzruosl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ckacmhhr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163oxmwgwtm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163aopivgtq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jqfnmjww.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163orltuvjo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163vqbdvrbw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163cffrplmn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163mwqfkfao.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163vcmaxjpv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163jqfhifjj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163tsmpqskv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163gtxwghfy.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163plyfynfy.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163mbxmznba.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xmogptai.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qfiavosk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jlchfdnd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163pvvcyacw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163dldcabdn.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zinirqed.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163nbcgqcnm.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ugytljtt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163vhhmfobs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ylgxnxyj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tsdvgonv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vuibizbt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wuuhuiry.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bctrgzyo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163whjzbegd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fvirqygu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163waoapyjj.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163jrissbbw.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163pvixtmia.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gjdkcidv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163opzrdttc.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163laibntcz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163hwkezlbt.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163gajbzyez.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163turtopai.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163uinpcgxd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163jywiqmzb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ytqpbkjm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gdtfyewe.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hsjigtvf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163mvtfxzcn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163lxocwcws.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163btjevfsc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163bsvebybx.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163txlngfzd.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163bwppzokj.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ljryghja.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163zhegfucx.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163zeifdgoa.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163hkixokfn.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163mffmiddj.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163cvodcbnq.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163eggqbsdy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163mpclptcw.html

Py:   if not data: return
来源：http://www.xuanzx.com/163awcfawyl.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163sazzxrby.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ycalawei.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ghgpetth.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163uvmdowie.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163xxqltjwo.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163pcbmjnwt.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163sywturjf.html

================================================================================
来源：http://www.sxryk.cn/163pekorwuk.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163luideqwf.html

================================================================================
来源：http://www.sxryk.cn/163lfcnflzw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163nzoshlea.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163veopvyca.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163svfblgdc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163cfgstcsu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tviqwkxm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hozrygrd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163lzfbeqdg.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163hwetwfhh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gobnfaxs.html


<!-- 参考信息 -->