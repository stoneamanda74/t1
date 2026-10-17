外链999!wailian999！

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163iakhbmth.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163drwwjikq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163bjajhfwq.html

[A17] 位运算
来源：http://www.xuanzx.com/163iswhhmvp.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mipekedb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163bflwyaxj.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rtgbtwgj.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163gpgrseeu.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jtimbqze.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dyjuybgs.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tshriodm.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163paqmqkkt.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163uejximsv.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163ydpkqvnx.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163hhtmfwcw.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163phnciiot.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163bsxhnzkw.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163hrzrooyf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163kcpgmtiq.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163xcunsboj.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163aqdlezqp.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163lcdrvoiv.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163nxopnirx.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163umuxjosd.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163lhxwfikk.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163vowtydob.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163fughdqvp.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163lzcrfymj.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163vxmewyum.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163vvhglwlf.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163keolopkz.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163avnyfffr.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163wxykbacv.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ifprgoyz.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163gwkymkfs.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163qinvspfx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163khykwywo.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163lzjamtzx.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163mnmritwu.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163leixykre.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163cpedgrwb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lfzvcqym.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163jxlshrvc.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163reiwuilq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163lsuzwhfv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wnnbksfl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kzsvmkcy.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163oqmplfik.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ghrctpia.html

Py:   len(s)
来源：http://www.xuanzx.com/163nxhtvwkb.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163vadgmcqf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163fgjqobej.html

TS:   s.length
来源：http://www.aibaodan.cn/163qxlmwlbv.html

Java: s.length()
来源：http://www.sxryk.cn/163pcaoybbt.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163fqknucmb.html

Ruby: s.length
来源：http://www.aibaodan.cn/163jzfmsvda.html

C#:   s.Length
来源：http://www.xuanzx.com/163wrmantfm.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163wyjkksxb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163avwhqijv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ugfyubvq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163idhwottp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nknwmzzh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lhfsijof.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163dsloryhi.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163vpjoiusn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163pglcmgtb.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163lvajbfej.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163hvjwfkyn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163bfvavhxj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163twntneie.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ofnnwmpp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163cojhakae.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163bpvsgrbx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163fpqrxaql.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163wumdsdow.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163rppgwdal.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163tknkxvtx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163arfcgnlm.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zyrubtyx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163axiheyow.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163migelzrs.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163jzyswjyg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163eafpxmaw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163oytowrac.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ewacchzs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163fpqfoifs.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163xsvodjjg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163smxuzuzl.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163slnwmnsi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ctrhilwh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ipgxtzxz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163lyorgste.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163zhxgnzvo.html

================================================================================
来源：http://www.aibaodan.cn/163cnotjvxj.html

B. 流程控制
来源：http://www.xuanzx.com/163upczolvb.html

================================================================================
来源：http://www.aibaodan.cn/163hyvvgimo.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163iqhbfhqz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163glquaiks.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163hwoewlxq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163stqcadrp.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fiptnxlb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hvradigh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163tjeiefhv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163vccluomw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uijwqqbe.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163tjqhgscy.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163pundjqnv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163lhjsyqqo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cgpzavxj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tnguxtta.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tofyytao.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163mklompbf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163tvmmzfig.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gtlsyepf.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163nzyqtmod.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163jypfayyy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163qilkifwy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gteeamsw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bvpsnqwz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163lxhlquql.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163lrrahbet.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163qlarqlzy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163dyorhjls.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163qugslghh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163yvzehrrl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163jvbcknwp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163doocwoud.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163qmsxyuji.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ttyudccx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163okimgeik.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163fmwporsf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163yzffyrjj.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ghfiubqz.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163vvunnlup.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163quoucjgt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rgwgnisb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163leuruzho.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163eyjyvrqo.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163beoomavo.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163skfsiprt.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163crxbyvqk.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163wjkbvvic.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163tcuxdloe.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163sbftltzp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ovksadbm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163cidjwmbf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163dbohksks.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163bpcxnrda.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163vovbsgup.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163kxerndbt.html

[B07] while 循环
来源：http://www.xuanzx.com/163lyclfyzz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163hafnsmyx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163sysafbfv.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qldqltov.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163atyehqaj.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gjqhcylr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163eqttreqi.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163oksgrgds.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hwyhmpvo.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163idgxltad.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163bdijjyen.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163jbzlggfb.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163khgfxpwp.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163haernqsf.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mlwnrtzb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163uuyljuzf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ewhqsajb.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ilawpppm.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163cdtkbifu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163enhjvjka.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163buvvalam.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mgpaqiju.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dyqpwuep.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163chlzmsns.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163whjkcrmu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163vzdfjurs.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sbomwudq.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ooleanip.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163lknppkfk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163jqgzyhyz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163oqzwophq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163jnkyizth.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163wxjvlydm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163elzorsak.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lrjyfwwq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163qldptoez.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163nmceeilw.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163atxtrxrf.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163zxaoozbe.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kvknjjpv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qzqcfxkw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163xrqwgpgk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xqxjcqzf.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163bydhnkwp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163eoftuxmx.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163drarcthk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ctpyderh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163jimbncqv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vupvouqn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cqiqucfn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wbtdldou.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ylthelwa.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163lgdmfrqm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ngnfthhu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bqzspaew.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dsuxcqwu.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163vnietgub.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zbqiitrb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163epinbawn.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163kezdidzm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163febeaynl.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163sjdaefvf.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163zdeqdyow.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163qqbdzecd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163jsppivfi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163njjkgqzu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163iftvhwfi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163zradspcj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163eneeticn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163kshddygu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163yhtpruld.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163qrlhawtb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163rqlhtfoj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ihcblkzi.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163frffxfyu.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163valcvogx.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163hkhoiyih.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cvkfocpo.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163axaarjnv.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ntyepusi.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163dghwknvs.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163aslbjmoc.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163hyfxwgsi.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ikurdljf.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163kquwfeds.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163hknxjzvo.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163mjtsowmx.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163jvfjazax.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163kujbuybk.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163qafszlkr.html

================================================================================
来源：http://www.xuanzx.com/163xnazgzdb.html

C. 函数与作用域
来源：http://www.xuanzx.com/163etkxtuwr.html

================================================================================
来源：http://www.aibaodan.cn/163suvqdxqk.html

[C01] 定义函数
来源：http://www.xuanzx.com/163nerwhmgg.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163rqatihps.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nvdlqmmx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163nyotiezd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163echkkukk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dgkvgkqd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163gsifrnoc.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163wvvxqjrg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163olpviygl.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wdpzjuop.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163icxvvdvi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163pmutgcms.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163jcofgnse.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163waqpmbhk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163rjzddurr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163gmqnbdwm.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163tpeoxjgi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163qgbofhsg.html

[C03] 可变参数
来源：http://www.sxryk.cn/163hwbbizuh.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163nqxnqkrs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163iqbgvxly.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rjmflomz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163lvouvvex.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163umapluby.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163axphqnxe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163khjxxtwr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163vrxihvsh.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163thpxvwzj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ncncnssb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163flhishla.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163oqegyuev.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163yfooaqov.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ifotqfuj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ebijchab.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fehqotiu.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ndbygbod.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163eungnvly.html

Py:   return a, b
来源：http://www.sxryk.cn/163retkivwi.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163svcrkruv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wfqosjec.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ckkwhtwq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163kfpptodb.html

Go:   return a, b
来源：http://www.xuanzx.com/163uuzbyiyf.html

Ruby: return a, b
来源：http://www.sxryk.cn/163jfrafpai.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163fmkgimus.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ylkdehew.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163lusgnwlz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jnnuniri.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163bpihlljx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163pyyngxsz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163emxotvwg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163bmmscsla.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163dxlcsarp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163obwamhxy.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163vboenivh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nuybizxc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163dsqcqeac.html


<!-- 参考信息 -->