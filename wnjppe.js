外链999!wailian999！

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163slqzwldi.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163rqcrrsjr.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ytsyoouw.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163jqvjyovr.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163xssxowuz.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163vejlxciu.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163coonhtiy.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163lqdatjzj.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163hindzxff.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163xhazdthe.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163mhatqbke.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163kjzxwhxs.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163dszfljek.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163zhnvmeam.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ejcznefl.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ghcxkuok.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163ypggzyyr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163cmdkxsta.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163pakknfbz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163xwpdgjlp.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163vsgpmuwl.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163uxrxzdgf.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ucxkjqxt.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163jdsshaqp.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163wcqbpnid.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bzedfxhh.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163vylgfggs.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163vovagqmn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ukdppcqy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wetmcvnn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163muagtjhp.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163eskanvnq.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163oisunabb.html

Py:   len(s)
来源：http://www.sxryk.cn/163gecbqede.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163cedyjtfm.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163kqnyxaxg.html

TS:   s.length
来源：http://www.aibaodan.cn/163xdxjlxmx.html

Java: s.length()
来源：http://www.sxryk.cn/163knotdtgn.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163uuzmzlpb.html

Ruby: s.length
来源：http://www.sxryk.cn/163uxqyewth.html

C#:   s.Length
来源：http://www.aibaodan.cn/163jxttmsad.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163zsakrkrc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ufqxrynj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163qzhctijx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qluwvkuj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163klcbxcuj.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qyrmiohh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ejerwqyg.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163tbdcobaq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163pwzdlbzx.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163eomxvoft.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163skyssljj.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163laovllmp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vnjmabwr.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jwtdeolk.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163kyulhfjk.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163zizxkqmz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ffuoonqt.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163fqqjgaqm.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163mctslsif.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163kirwkjpy.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163wwvikgiu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163srqulnik.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fynjvrcg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163wareedsx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163nhoxaohh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163nmssddza.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163lictcawf.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163sorkeawe.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163kxgxozyz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ltczyovk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163djpvntbp.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163nwpnxqdt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163bafhjeui.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163xurqbsme.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ulkulqso.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163nttwejmr.html

================================================================================
来源：http://www.aibaodan.cn/163xdadhtri.html

B. 流程控制
来源：http://www.aibaodan.cn/163acqaqmec.html

================================================================================
来源：http://www.aibaodan.cn/163fhsfnefj.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163hcpjfrji.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163zjkyiqze.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163qkgzimef.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rrrjexzz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zzuhtyux.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nwgkklbo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163cjmkvczp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163kfvykbxt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ouobdwiw.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ryyxzpwa.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163fkptkdgh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163enqunbla.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163azwmdffw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ebbvbvtp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mabydzue.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163xubqxxel.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163cnhvfsjo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nxpdvnzo.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163kdqzwizc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163obdlukdd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163usjbaqov.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ilutzeih.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gbxyoiww.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ansbckjp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163rndxlsio.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163gmiwasxe.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163evtuivnm.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163fptgvgiz.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163dqkgjbkl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163yngzhwtw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xnzpdopj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ustolgzg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163vtalrpkw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wownlcvq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163hvglhehf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163trubjrfn.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163bgmpcegr.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163vybllbzo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163pnrivwgw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wxvrjntt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wzodduly.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163hogvuspz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163domcgkkd.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163cuxzofof.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163zfjnbnvw.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163xckofkjx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ctrawddo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163zvzxmgsg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nhggasvi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nmjbpahk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163oqcqdacq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163dldkmmoo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163xvfsgefd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163yhykusoe.html

[B07] while 循环
来源：http://www.xuanzx.com/163chubjavb.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163kqhmjnvk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163cyllgecn.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bpdykxsx.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163narqvotq.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163olbvgdhl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163spvmwzpa.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ugphsqnw.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jrvkwnpf.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ukyzcbnh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163yahbkwqm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163rwwfepwl.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163oqfxeaeg.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163amezzozc.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hscefxqq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163cgsaiavn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163tmoyyziu.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jdvhlrmq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163vemxmyob.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ozwlutdp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163evukxekp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163crkhemoz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163krjflpca.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nzgsiier.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ezkfsruk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163pyfxibao.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rvvfbvyr.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163rqzudscb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163jhedgnmy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163lmonnkid.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163zngtmruc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163hwwzpvqw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163yocvbuit.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163euprdkmt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163idsnubpy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163gfkigqmd.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163tfsioujh.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zibcidal.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ohtiopyh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163epdzvkbh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ahzfbxqh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163uogpvgvp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163qonfnzeb.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163kmvzxsic.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163kgipzvav.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163edjymqis.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163maulfvlc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163tcrwwbkt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163geiphlvc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mqizavez.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163omzswipa.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163wryoaziy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163hnvjuzko.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163syiczhmc.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163nitsadql.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163cnobdsmu.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xtomcleo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163muuqdycp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ujuefhmm.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163kkztncsd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163tjmxdyuy.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ehzhtgws.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163tckymatl.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ogeesprk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ktsbmrns.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163yyqepahs.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ycihrure.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dibpphdz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163jhymbzhp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163sijsefrr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163aatpwwkh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ksarckqk.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163xtnisdch.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163wfxymxiu.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163sgkpvkgv.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163evxoeehq.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163vtlgntde.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zhuqyamq.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zujroxlr.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163qboyldfz.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163sdpwagxk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lhqixdwr.html

Py:   if not data: return
来源：http://www.sxryk.cn/163shczjvvo.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ewgqnceu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163hkuivdop.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163scvpxavw.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163dcikpzos.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163iaqrhsln.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163thzyuqtk.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163rkcnendj.html

================================================================================
来源：http://www.sxryk.cn/163lbtclorz.html

C. 函数与作用域
来源：http://www.sxryk.cn/163kinncdwu.html

================================================================================
来源：http://www.aibaodan.cn/163uhdgyhck.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163rurkteeq.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163recqekgk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163svepronh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163onvigsbd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ifslnxsu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jlmaikxj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163vamxxlbq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163kagexunt.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iwqhyxwz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163fizorrzw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163jldcpkul.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163hwhlsugt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ggocuuls.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163usmryrle.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ggiuulhz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163gvaiiors.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163fpxmhhnd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163omsdymkw.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hfyuktkb.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163umxhwxvy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ahnjvbfq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163enoqknal.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163tlporvms.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dbeiuyqi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163xnukzxpn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163cykwuxyu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163fnwchugw.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ujjsxmgo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163mzwkomig.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163mijmxxmj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163kpjnekqy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jgtpeshv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163zgkstlxj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163lfgsqtxe.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163biavpgbj.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jrxhnaai.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163gcsvqunk.html

Py:   return a, b
来源：http://www.sxryk.cn/163wfsqyttf.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kgtauwlx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163honkmyui.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163vxbqahqv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yuygwnsp.html

Go:   return a, b
来源：http://www.sxryk.cn/163dtpkrtle.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163hvsxlxbn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163zlybuskq.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163xfaccxzi.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163csfsmfuq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163mojameas.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ognrfykm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163covazrwk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163bevyiqfz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163jnlmaila.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163mesbaoim.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163uxbjzgnd.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163tepgrorq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ujdrnjuc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163eheicdsp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163kvsdtxny.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163numaaatd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ugflzetq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163xrbzpvhx.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163jpkslmav.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163srzdgxqa.html

[C08] 闭包
来源：http://www.xuanzx.com/163xjvgwdlo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163hzqakbqn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163wqhppbtk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cscpjtdl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vkapksav.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163btfouugo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163dclqfxag.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163lznygdnb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vsnmauts.html

[C09] 递归
来源：http://www.sxryk.cn/163jokkfucl.html


<!-- 参考信息 -->