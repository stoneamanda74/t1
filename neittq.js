外链999!wailian999！

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ijrmajwx.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163aakrahgj.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dbnjklxu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hmutvuuv.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nzzezxzj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163yicapeci.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163awjoqexu.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ihuzitwv.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163szowiptc.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163zrbnqzou.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163xulkknhd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163jhfoqwhk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163wbzgfbvu.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163egnkpgtx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163jgqechlc.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163gffegvsb.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163ipvkbubo.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163zxiqpvkb.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163dlaefoki.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163rrrtlegq.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163eojetfhz.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163snezrlxm.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163btoxrpko.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163vhsshsci.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163edhpewoj.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163mwmewzzx.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163aukdxyth.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163lxyqddtg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163wosxwxnl.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163qmeorxsz.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163jyaolokj.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163cweweicq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163kcymjtrb.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163tessavej.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163oahmafbj.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163uvwxvsdy.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163poamwzyt.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hykvxuqr.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163rfgmtvki.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163qmtgjofh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163blhtbamb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ufsoyzao.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hxepmibd.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163kzjnigew.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163gkfizjkd.html

Py:   len(s)
来源：http://www.xuanzx.com/163rfbhlfpk.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163baiaqymo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ufbqsfhe.html

TS:   s.length
来源：http://www.aibaodan.cn/163yldivuim.html

Java: s.length()
来源：http://www.xuanzx.com/163marqbghd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163jmrofikb.html

Ruby: s.length
来源：http://www.aibaodan.cn/163kfgvtlvn.html

C#:   s.Length
来源：http://www.sxryk.cn/163uxnbfxej.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163yooronsn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163nelwqnxv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163ufyarwlg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wnfyogrl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xaipoaal.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wtninwgv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163hqlkovll.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163oxlinbjo.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163nliblncz.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163fmnmthxl.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ascfavgg.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163mzsoibpp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163uflhyxhf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dllfjyvc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163epyagalq.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163wwlqwhit.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163iikenqcf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163mnyzdemr.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163gopguxjo.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163hdtcvgen.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163xopgecst.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163fpfgqvrj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163atpqslvl.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163mroekapc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ruuhruti.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163xinagntm.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163nffzlizr.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163cejplong.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163nwrkzmmj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163vyjkkpcd.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163urlcyubt.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163dtbckqca.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163hvpsoycr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163veapkcaf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163jtkeealy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163rfozmquk.html

================================================================================
来源：http://www.aibaodan.cn/163pvrlnxpy.html

B. 流程控制
来源：http://www.xuanzx.com/163pbtslefs.html

================================================================================
来源：http://www.aibaodan.cn/163vxqndonr.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163hcqyibog.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163drenmmri.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163poithshq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xpdaembh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163olgocpsc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ginjlujf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ylrtbyzl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163pilrofum.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dcmhoyku.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163lzrxyoru.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163sbkorizp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163znbkrvzs.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wrgmhywc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mvoyspzj.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163iojfjnje.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163llmsacgr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163giydcfuk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ovluecit.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ctwdxljk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163uwopwccx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163spgfdomm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wnobdyaz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jojqdxwv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163oztavgvp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163uizbbbwl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163eogzotzs.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163yorkiggy.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163yngwsiti.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163shstnsid.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163mpihweqy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163aexttacj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rxkmdvnk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163dndkhxbr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163fxoscvnt.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ldjopxrw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163gkqsuxul.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163npbkviyz.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163onzniici.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163kbgcbunr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ykcclbep.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ccfabteq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163bwaxdkgg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163imwlqqyp.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163pgtjadkm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163hdgguayd.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163lhzvtysq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ycbzyejm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163pjiumqmz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tfulrigb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rranaado.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163uarxvcgf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163jfvsgkrn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163aktjrrno.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163dsdyrtfh.html

[B07] while 循环
来源：http://www.xuanzx.com/163vxiuqhqh.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xfclxpml.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163hhsrklsb.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163sybosdxd.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tgjqlxml.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vazbzrxg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163omxohuna.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jgbmmrcv.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163opzhdpqh.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163nxpnbamm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163dojlsufe.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ymmupqsh.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mzxlhjyg.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163upxpoiix.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bapkjleq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163veflgpoq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163voqoyqnx.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bbohlrjo.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163hcsgyydi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163fngamqhd.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163livxahmw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zbmhhokm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mdefbehf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uscoesrx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163gpjfqhrr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163gyntlser.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mpgmrcix.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163eygzntkd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ejvtvzjs.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jcvpiprm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163namgtkbl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163mmlpoqvg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163gwzfimhd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163nzsffjeq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163fqvdxhin.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163mlqsqveu.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163jgmjqxpb.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163igfkzgpk.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163lyogdiuw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163waqscmzv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bafmkhyd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163dgoqszbt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163wcyhisrr.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ypolwuko.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fzhykcak.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163gjpfffxs.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163wayevivk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163wcfuncla.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vjwavowe.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vbyeqpcf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qglhztwl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163hqpuipir.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163aeqhgbdn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ybqvqcaf.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163rhdlspmt.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163exbcensy.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163rsxobxjk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tmsdmpsy.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zczdwcif.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163blpbfxnf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163wwhxetxx.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163xetfcbue.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163jzxlvrop.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163qqfpiwsu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163tfspfsho.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163cktklebz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jnxpsfec.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163itxexbfn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163vdgghtwc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163mrzpmhyy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163nfnmrkpk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163oowidivk.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163zalbdlxz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xqdofdsc.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163woddbckw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ivlwjhqe.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163yiyihlqz.html

Java: a && b || !c
来源：http://www.sxryk.cn/163rvrlawxe.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163uadboyck.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ywgygfch.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163dxuoqkhu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163loomloex.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ypltcwtn.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163fjvsbadi.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163qasncbgg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163mnchptpq.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163wzrnycmg.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vnnrtfqp.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163hlnhocxm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163gutcbcaa.html

================================================================================
来源：http://www.aibaodan.cn/163shajuyec.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163pvbnatlj.html

================================================================================
来源：http://www.xuanzx.com/163etnkojyu.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ldpdrisa.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163hfffmhnv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nuzjmxdu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163sshoruyo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ruruzbzj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pcsdiyrc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163wxncliyk.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163nnvaprew.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ofqpznjp.html

[C02] 默认参数
来源：http://www.xuanzx.com/163kgblsoov.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hfwbdmhx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163uqupswvn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163szgliswc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163xfsajtaz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163bqaqwlzx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163rbmsvnia.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163eqbuvvnq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163dqpnaypf.html

[C03] 可变参数
来源：http://www.sxryk.cn/163kroqjyxw.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163fyfghgdp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163tqlojuim.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vshfbmpi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163daijpivo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163yxkjelxc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163vvjgvfic.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163niiggnho.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163bycgkdwi.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ftikzpsy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163sygjirko.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kcfdavtv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nrvkcqny.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163xqopywvx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163rwwuoumx.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163dapdbuhx.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dzimutuc.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163apxanjqa.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163rhbdfeft.html

Py:   return a, b
来源：http://www.sxryk.cn/163owmblabv.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163tsyzzaxu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zqedevra.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ivogotnv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163sqkbsrow.html

Go:   return a, b
来源：http://www.aibaodan.cn/163fcaueffn.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163hacnevib.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163eovnvvze.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rhyxyjbo.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163bacwigjd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163fusrhurf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163gytyuzae.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163xjyijpnx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163uzhxifts.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163xeuvhjzg.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163voyskatg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163skdshdlx.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163muzxoupt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163uqcegjuj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tbyeyekp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163goenvjbn.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163dyjufsez.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tyzfrjmb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163eztcqqum.html


<!-- 参考信息 -->