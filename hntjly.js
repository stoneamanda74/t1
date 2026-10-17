外链999!wailian999！

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163rdupqsmu.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163rvuaqsam.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163gleagiat.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163aysdpovf.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163puhdzpkd.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fmklkmlw.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163mtfmzgst.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163jwffmeii.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163qrzdgjnw.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163dxuvagvm.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163atwxmihy.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163agmdaqgr.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163mwcbcsaa.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163jhlearli.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163mofxwbbc.html

[A17] 位运算
来源：http://www.sxryk.cn/163lvcaipww.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ujiltjkc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163ihjjkfju.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nrlaompi.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dkdivypd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nubivhij.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tiraowbo.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ogylyngs.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163knbduoes.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163hyigwbmb.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163lyynvnft.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163bcfsylnb.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163jfzdnahf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ywxhtleu.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163yirmyhjc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163uwktoknx.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163hyugrnwx.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163ponizlvx.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163kkcjpmjq.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163znplpqxq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163urjdeqgj.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ysthjoef.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bgrdecho.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163ubpgrhjt.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ywiqdkwd.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163pnsrpypi.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ahjsgnnm.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163peieswxj.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163zsjualcx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163mckfqbgz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163srmrdwfv.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163bknfohqj.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163wvcchiel.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163zwsolasi.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163utkathgy.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163hrsbawct.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163idhtrcih.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163pqwzlicv.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kkngrxqy.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163otfrngwd.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163gwnldjqm.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dsrsjdbo.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163iyvtmsfm.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hmmxbuwf.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163nqicsinb.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163yimvznyf.html

Py:   len(s)
来源：http://www.aibaodan.cn/163hlajqkic.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163ifxufuvr.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163fbgygglu.html

TS:   s.length
来源：http://www.sxryk.cn/163aanipaop.html

Java: s.length()
来源：http://www.xuanzx.com/163iuaqomlf.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163zmuvvqtf.html

Ruby: s.length
来源：http://www.xuanzx.com/163kxfixpme.html

C#:   s.Length
来源：http://www.aibaodan.cn/163jokrklca.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163mmjftmva.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163vwkevoqo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163hssryqss.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nqafcaro.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cshzqsdq.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dubgaufh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ipblapcq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163toqmbbmb.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ioxjsqzc.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163wcdmrnpz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163jnojhbft.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163xjazshiq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163xzlkjhof.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163fcxerqbq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163iexymggb.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163mkmtryqq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163jvhwxrbh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163hjlepegv.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163gazjaexy.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ojusagqa.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163epwsjyam.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zmuaolqr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163djikoyrf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163mmikpssn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ehctckmk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163aivjcoqa.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163sidooilc.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163lvvdogbc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163duhnrnco.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163htqvmdjw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163nlbyeyvm.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163pqsltvba.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163svymduoc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163cjhmwjmq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163siueymrb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fyytdwgo.html

================================================================================
来源：http://www.sxryk.cn/163ttgpgncg.html

B. 流程控制
来源：http://www.aibaodan.cn/163dsxegwmp.html

================================================================================
来源：http://www.xuanzx.com/163xmxwdkbt.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163vnfivpwa.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163flghsdxi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163cbutfbhw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163frotwdis.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dkytnedz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mxgfpcqu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163vujobsym.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163amwgjnhk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163krzuqbts.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163jodpfort.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163sgxpxcif.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163tvagrqkz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mhezgmdg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hhrrzfif.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163npogmncn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163fwrspypf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163rfqaqwto.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xcdalbcd.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ykrhniat.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163vcctdgvt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163eomfzpea.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163sseytttc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163sescigty.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163aqunuaah.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163nlzaacab.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163xxngqcgr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163issujjqq.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163uvxcdjyg.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163aysbrgca.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163kjkrvrvb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hdozuyrd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163licfvmpc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163mkwofhst.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163qaedsrsm.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163cozjbjum.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163pirsgcrh.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163exsevlwy.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163sdrdqeuk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163fcixknnd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163cymmclqf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tdjalylv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163qkcxgefr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163rlvulslc.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163okqqkqdw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163fhyjdeie.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163kidrgoab.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163vtfztbxb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163dgctdrhg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hrzaokcc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ctpwajnm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163khctkjgy.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163pbrbxmbs.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163bccimmaj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163zdrubjzt.html

[B07] while 循环
来源：http://www.xuanzx.com/163nwhywvoq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qvkswuww.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163wtmmhomo.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163iixgpaqo.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qfbnvyly.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cdugxfvu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163kqfujeul.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163prpfhtvc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dllpljrw.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163hvhqopfu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ilswokoa.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ymqfztst.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gnohvpfl.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dgcheebd.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163eoinfrdf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163kriucwfy.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163eezmqlgz.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bjrmtslr.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163svxwlhjp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163wldnwqke.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163utuwruav.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pljufieb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zcwhhjec.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163betntxwo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163orurxyxi.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163zaxixist.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pzblamak.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163falzvary.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163hffibvwh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163msowjvjd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163brnbhmpm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163nemdqkcv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163iidpdvzr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163rnvlaqkh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jplpkihj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163pqohzpnw.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163slyupday.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163bknvmcaq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163iaatuonw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163pzphvmki.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163virzikex.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163rxskcwjs.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163onnrvsuv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163msagbcfg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163yzqwzyib.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163iswqvzof.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163lfspmphx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163qinkubmw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vbafecyk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zoxhlymo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oxyaicsl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bmbeexfo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163dvzciapv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mitfiqhs.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163zyphbsdm.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163orvfutps.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qnbqnaan.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163iupaiury.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sinhnggr.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163cnmkekdi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163jmuzjqji.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zchvtvsw.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163rfqeotvm.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163dulniwuz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163dkphslqu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ghzfkcpg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ibdjulfa.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ofgnqzsy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163heagpaqf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163wncjdjir.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163qihtuutt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163cooottga.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163kzfyxlgr.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163kdoktboj.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163piajzbzz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163kavtucbi.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163soclffat.html

Java: a && b || !c
来源：http://www.xuanzx.com/163rapiazxu.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163rwigkhmc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163gbicvfvz.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163yqpoysyz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163occrukko.html

Py:   if not data: return
来源：http://www.xuanzx.com/163wgijpsvx.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163fymalqjn.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163mnqawafp.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163eoqnfkdl.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163pbterflr.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163jdqpvxvv.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163bivftgtw.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163huvipscb.html

================================================================================
来源：http://www.xuanzx.com/163ivyvshow.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163clurmojl.html

================================================================================
来源：http://www.sxryk.cn/163devnglbk.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163adqzlwhr.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163tefkoarz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ppynnlxg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163jmqcylhv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kzlwoxhp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163drdhzxtr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vrbrjzji.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163npvneljh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kccgkagz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163tjdbmxof.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163qauciiof.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ekyofcbh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163hxcwroyy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163vatisgoc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163kvjwekkf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qkupaxjw.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163oxcshbfn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163apobzldy.html

[C03] 可变参数
来源：http://www.xuanzx.com/163hsiqkisk.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163vpobcyhl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163rydpyxzy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gtevnexn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163pbnsxbui.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163orhsaszh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163dadjmcvl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163crkmkazg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163efigcyda.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163oydamhus.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gnkelhpv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163mjfqjtij.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vhrvtcko.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163khvkvspz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ubbackex.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163danoakrr.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ghwemqov.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ikvzkcuh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163vobnrqee.html

Py:   return a, b
来源：http://www.sxryk.cn/163rmgssawl.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ielsxleq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163nmjpnhea.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163wbaawfvy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ukwuslnp.html

Go:   return a, b
来源：http://www.aibaodan.cn/163mnrozjbf.html

Ruby: return a, b
来源：http://www.xuanzx.com/163epqdekdw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163guhwldkp.html


<!-- 参考信息 -->