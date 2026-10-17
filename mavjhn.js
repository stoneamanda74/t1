外链999!wailian999！

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163xipsbdjn.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163qfyqyvvq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163hksntfof.html

[A17] 位运算
来源：http://www.sxryk.cn/163qffowbpq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pkzefluu.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163sctagnrk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uslggfrm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yennhler.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kqegysvp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kkohxbkl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bwrnajxi.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ajanihox.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163zoeyvhtx.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163gttcjrph.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163kkikrskx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163azelgdgx.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163nitwqpre.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163iolzmkht.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163tzaciese.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163ciipkonb.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163pyxwnzdx.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ydnlcwpy.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163fyfduymo.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163xdwtckmf.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163jfnnrseh.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163bkyakznv.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163hwmbshba.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163aumqxxnx.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163moeehzql.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163wrpxxlot.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163xqwuxtgy.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163bhsfabco.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163pyrjirmd.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163tvbxiivm.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163eeqofjtn.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163ktspglrd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163hnufirej.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163vqohyrzk.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163yklhedrs.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163mzrpurtz.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ulvsbaet.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nieyaesi.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163yeunrnwd.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163csydytbz.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163isxgjgkn.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163czynzzkc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qvxahrlj.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163dughiwyx.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163lswvzrov.html

Py:   len(s)
来源：http://www.xuanzx.com/163wvedzsyp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163zuvquuhf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163jckjshxj.html

TS:   s.length
来源：http://www.aibaodan.cn/163vtqtwtpi.html

Java: s.length()
来源：http://www.xuanzx.com/163lzejejgx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163yjizjddb.html

Ruby: s.length
来源：http://www.xuanzx.com/163dwynsanp.html

C#:   s.Length
来源：http://www.sxryk.cn/163vytjixrn.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163fhoiswwu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ekmmdkmm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163vwxfweaz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zmfgwpcs.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xhqeayqg.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pbtxpmku.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163sltlelgx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163mbcpnkgu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163nrilmtzu.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163flawevom.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163cdatuptw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163bcafudip.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163pxrqhfuj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163oxxcgjwt.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163xjaddevz.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163qwexirhq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163dnwsyeiy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163uwrlibdv.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163honagxsx.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163przdiane.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163zphhwkbp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fafnjtdi.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mnjtrnhz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163abxsklqz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163yzsjpcda.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163fsguawyg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163jbzzbvzm.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163kptvajte.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163xnkdsrir.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163vqbwxssu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163exyvdquf.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163nfjsnujs.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163cikeifta.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163oafkxyhw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163rnfcwobl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ubztgdcz.html

================================================================================
来源：http://www.sxryk.cn/163hydnbptc.html

B. 流程控制
来源：http://www.sxryk.cn/163wufmzpfb.html

================================================================================
来源：http://www.sxryk.cn/163enxjkxns.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163pkjofzen.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ncfnnnam.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163xzzjtips.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hrnfubgm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wxvyltse.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163aljqfozo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163qumbdptg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163vjlizjjz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kpttbtrz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163qfhtasia.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163aqdpfznn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163dlvscube.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kervwgnv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xkrxlord.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vrsjmblm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163hwjmrulq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rxfhwzpa.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wvkhxifu.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163eaxfokno.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163jfhnjblp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163bbebphrf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163gbniivqz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mmukytee.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xvvqqvcy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163eceuljbl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ylimihvb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163houqydxi.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163afslticq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163wutnposu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163npcegkza.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163miqskrkh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163hussagio.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163tcizepus.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163xhfsrwlx.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163xrbprcqm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163jgxuoueh.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163rygjemuu.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163eudlelel.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163riupszvd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qhusiyof.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zeboizmg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163wyrutevh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163pepsefwj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163mobdhxay.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163zxkgdeuq.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163eedgkezd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163xwpiswpx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ucnklnml.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163shlbzffs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163eyyyuclz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163whooozsc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163stzuxqea.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ckxqdmyn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163fezuclcu.html

[B07] while 循环
来源：http://www.sxryk.cn/163asagqeig.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163pgnshtbu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163bujaehri.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163navifhad.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gvidchcx.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nktraimf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163rydudrfm.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163cfigisro.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kormidkf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163hjerrrjj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163qfzcpbcd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163aijqtxzf.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mtddihxj.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qzwhpnyz.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xbalettx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163tbblxqxa.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163oebgpdvs.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qgnejplq.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163cknckwhr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163uzjsnzih.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163xetowqyd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163noldpxog.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163otgcoytg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qpfadvuc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ccbgmtfu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163icmhlefc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gkefngqq.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163simwxezo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163gbmdpzyp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163xlkxqfly.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163eltalepm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163izevfrsv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163bkgupbxu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163xemsvkqb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163shqkvzqy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163bsaiieuk.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ntnaktpx.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ezwyfjzz.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163usosczqk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163cugmnkek.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fuboocqd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163wzrkzrpi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163pwvwvzre.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163gztmdchp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163wybffoqd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163uxrbveqc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163wafsenkv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ymjhkvyq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mkczvtkb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gkqxokzt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cqplztpx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gmprzqbv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163fqmzfdiv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163bnsuolvf.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163jzzdylrf.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163cmwbocmp.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xnmgcwnp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163tbovwhii.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bcxfijir.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fevrzozl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163qchzpzrp.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163stspsrra.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163enkvhhqz.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163gqkmbqci.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163nklxkedv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ebjmoudg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yzraaups.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wuomulpf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163onoxekbk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vxlzzjmo.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ggbbqunx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163klemygqt.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jxrdjsri.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jitevszq.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kicekdca.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163bipoihge.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ygmuehom.html

Java: a && b || !c
来源：http://www.xuanzx.com/163rhsmnkcl.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163eydxnsgx.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mdfbqcbj.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163stbpljhg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163nnpvhznv.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xefcxqta.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163dlgnbrll.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163igsgwuva.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bawpdjgw.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163tnckbvcx.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163mgjcphqm.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163nhuxivuy.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163zwdhyutq.html

================================================================================
来源：http://www.sxryk.cn/163cnsjxcha.html

C. 函数与作用域
来源：http://www.sxryk.cn/163wzookjfl.html

================================================================================
来源：http://www.aibaodan.cn/163oydpbvva.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163stnnrgil.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ejyjdhxw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mniprdvj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kzibthml.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163uihgjwki.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nqwkxilz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163dtqqgyjl.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163kgafkhqu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163poivkphp.html

[C02] 默认参数
来源：http://www.xuanzx.com/163mxtlmets.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163qwcyahdh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jtuinbkw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163dkmwbrsy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163czppxjhy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163miwfrunw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163hmxtscoz.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163kpsgjifo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gxabqolh.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163wnjptxta.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163doogosib.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163udayuizf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163acalwhdt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ysgrmtrn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163mqilghly.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163vgjojnmu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163xyeftths.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163nuyvdzzx.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mkiebsub.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rzusovzr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163legdzvbt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163qmusifsh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jzaqndbd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163jtzqrpap.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163yarjigns.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163offwevlk.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pfxpzwoe.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163zgnxtrne.html

Py:   return a, b
来源：http://www.sxryk.cn/163zrpldujc.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163gvrgcceq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ywspzygb.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tzzsflxx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163qookrzvu.html

Go:   return a, b
来源：http://www.xuanzx.com/163tzjleuft.html

Ruby: return a, b
来源：http://www.xuanzx.com/163waywlibp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163snucvaqv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163aefcwlvb.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163cqywnniq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bhyjbynt.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163mfpbbflu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163qcbtgwdw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dufqyhoh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163pkqnenvk.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163mzwxryzd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163gouiikaz.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xqgnriak.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163bumxobku.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jtledscm.html


<!-- 参考信息 -->