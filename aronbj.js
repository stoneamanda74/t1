外链999!wailian999！

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163phylegzy.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nqseosec.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lbwlqvfb.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dlwiguux.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163kgvyejnj.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163tuowxnbv.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163etvwzlox.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163wvcwceqt.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163wsjczrkx.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163mblxbkuc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ebyeanuc.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163oyuukeoc.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163fsmkmens.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163wpwxdfkf.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163fnzsszvo.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163fasjizne.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ojfeqica.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163bothakrt.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163lrayfvys.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163acgthpap.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163wgjftfop.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163cpkqcxlf.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163xdkzpjdq.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163iqjotnho.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163fctpxtfd.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163ecbfbymz.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163oketavyf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163vsgdpukc.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163ftkmdnre.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163jxwhrmio.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163qqyeftij.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163bfmedowo.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163eiyzxetc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rfxmdavk.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163sgysclxp.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163pnxjsycf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nmkzrldf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fipejgew.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gmrkppqx.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163vsddafqk.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163ckptuxyw.html

Py:   len(s)
来源：http://www.sxryk.cn/163snposkiy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163vghctrmd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163kupsstsp.html

TS:   s.length
来源：http://www.xuanzx.com/163amjdszzc.html

Java: s.length()
来源：http://www.sxryk.cn/163ailqyuuw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163udgpmgoc.html

Ruby: s.length
来源：http://www.sxryk.cn/163eoqplqmf.html

C#:   s.Length
来源：http://www.aibaodan.cn/163fwbfsesm.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163tqprqerm.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163dvvckpaa.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xmpiyshz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lzgalqrz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163fkytuwhx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163zvzlopiv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163jrqznaab.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163qvfmdsdw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ixqhgtao.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163yeteirqp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163gsqcrisb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163qlvrngnf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163immjvmap.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163vzbcftjq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163bkozxsfw.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163vbiyrqmf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163oosiihst.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163jzopzxhj.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163abcgxdei.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163rtmklmux.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163isomineb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hpyloiwh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163krjeyyjv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163rsquweez.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163esujsmxt.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163mreqmwix.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ipgttmnx.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163jjxgfmhq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163slefklps.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163gklipsak.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163felttcee.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163rlmytirz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163bbbbuvzr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163cntygfzm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163epwypeah.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163mdadrmdm.html

================================================================================
来源：http://www.xuanzx.com/163bpvcwfmv.html

B. 流程控制
来源：http://www.aibaodan.cn/163rghthzbe.html

================================================================================
来源：http://www.xuanzx.com/163mgxqvthy.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163sbjctxab.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163mczuykgv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ecnxykot.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vajgqnct.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qwpeirqo.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gbfgkcbz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ckzgsucm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163cflzfjgj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dofrtdvb.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163zegeoyml.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163vwgxrvzp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163amfpkwkk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mjbiougc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qzwxtpxe.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163iqmkhipa.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163xhfnusvz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163vbsjwjyk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ompsoafc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163cmyzllul.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ggtxiurc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163jvxnwcug.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163jrdkuvmh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vxibyzcz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163eempskvn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ismcfsbk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163pzdtewvz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163psviheac.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163yphgeync.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163znicxpds.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163lnholhjb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163puafrzdb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gqhnzfug.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163bcvftdwl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ywstyfnj.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163szyskhjq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163bkggyohj.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163jtctrcez.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ikxmypvx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163dezycnoe.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163sfesofwf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ktwxyusr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163yczynlvs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163dizdmnxp.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163slgeafcv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163nswvdiwg.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163pzlfoznn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ipzzwvdc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163jwyhxend.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163pndvvznh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qfhtbqgq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163rhcbdsxd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163uulqycfu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163hxawyziy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163rffbwsyy.html

[B07] while 循环
来源：http://www.xuanzx.com/163moohccda.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163dmqczztx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163gaubuqpo.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nsvpdxcu.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nruxyrkn.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uuukvnxh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163xzlpgpho.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163bkwwsenv.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fcheitaq.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163mbypciwc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ffyjatng.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163lsmelyph.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kxiutmap.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ytlcsqba.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bryzsfeg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ebxcfpeg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163lgjgkrhk.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tgtburkn.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ckkuoalr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163buflqlfj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163piwjmbvs.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vqtskzgz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nhmwbbwp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mwcwgixf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163xwyftsnj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163cjvmnfyy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yzlhyvyf.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163vkbeoypo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163gutogxyp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163wvwwupip.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163cvhxjore.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163lfkriqrg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163qhiapyyu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163jwcnpsid.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ihazxbyu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163syotyvie.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163woijysgi.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163zxlckzub.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163davtvwsk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nnexixgy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vuersncg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163qvjschjp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163yrkamgax.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163dwqcawug.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ciwzwarv.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163pszuympq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163lmdpgtrm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163pljgafvp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tbxiiizh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163aguhkxjv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lzkfxxsm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lgppgyoc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163wdrgowfa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163okuexscw.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163vodckxgo.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163oaqrcfba.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qfqgmtqk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vulfkhln.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xjkrzagq.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163idergbpl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ojnaljbq.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zqapetkm.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163gudlsnrn.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163lycqbpac.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163oeepidfj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163lvbpyhsk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pjqcrihg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wehkzzef.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163prmdcpkx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163iscauwsn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163grhxtztr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163lrzwfqva.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163qunfayke.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163lhtmruxr.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wxrluula.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163wxbjqhod.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163gvdiheuq.html

Java: a && b || !c
来源：http://www.xuanzx.com/163mejkprdg.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163rakxatji.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163kjftacgt.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163mxmbtuku.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163mtkqsetu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163hckblkck.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cmnjsuuf.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163iiodsnmv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163rpdqxmpc.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163hoxsjlnu.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163mzudlqyn.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163wattwzej.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ztqcayky.html

================================================================================
来源：http://www.aibaodan.cn/163lriunlko.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ffbrvdzo.html

================================================================================
来源：http://www.aibaodan.cn/163zkjtetlk.html

[C01] 定义函数
来源：http://www.sxryk.cn/163rcmjkddz.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163lobpjjgg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ypcocava.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kqjsbqiq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163otpssatr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hgdkhrzr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163hywwkgyu.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163lffsowtj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yxqcvhiy.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ussavbta.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163vejwjyzw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163utfublfw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163cjfegsin.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163mmifnqjk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163isfuvnri.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163fdpvevje.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163nvhzstwv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gjmunwwr.html

[C03] 可变参数
来源：http://www.xuanzx.com/163uqqoohme.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163gstuwivs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163melicuru.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qtlvgiri.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wyhphpxz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163jwnynmyb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163stwdmewo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163netuuxpj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163apnxkgei.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163nofpbsrf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ebjeiwkc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163dvsoouij.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163agdilkgc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163abakehcw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163outgtyck.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163qhklbvtl.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dsaxgkfv.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lguuarlr.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163nhoimxmh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vnabuamh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fuorvbyu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zkeuytsc.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xnhafzpm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163hgucxyzx.html

Go:   return a, b
来源：http://www.sxryk.cn/163tayylsnt.html

Ruby: return a, b
来源：http://www.xuanzx.com/163jnqutbhs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ptmvverv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ofbbjvsm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163desukqrr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ojzbqptk.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163atoepyoo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163mslmjhuy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163xrnubrpv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163qvuhhwsk.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163zdqzhjhf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163uaojgglr.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163meyfveoa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163fndvdnic.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163idjacqum.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163bujzajqs.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163asqrtyqe.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163pfspfmwv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163kptvaxfp.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163addichmb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163cgehwkfb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163hlcgwiab.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ymatdjho.html


<!-- 参考信息 -->