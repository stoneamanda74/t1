外链999!wailian999！

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163fsfvooui.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163sfraqkru.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163wmxqioxs.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ydgthoyo.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163ayksmtut.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ifakzdql.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ftpkurge.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163qhtmxmix.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163nxrwtpxq.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163owufwvpm.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163iyfnersb.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163zpqlfdwv.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163jlclwyxe.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163sknhgzbm.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163xzpzqmnm.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ipmhdpei.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163seuimdle.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163khdoluzo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yofrvqog.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ckhigxnh.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163dwbbmrke.html

Py:   len(s)
来源：http://www.sxryk.cn/163tcwsjebo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163qqshmucx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163tmwcmozi.html

TS:   s.length
来源：http://www.xuanzx.com/163lqedgupo.html

Java: s.length()
来源：http://www.aibaodan.cn/163xnmbehuw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163tytzjyej.html

Ruby: s.length
来源：http://www.sxryk.cn/163snnxcemz.html

C#:   s.Length
来源：http://www.sxryk.cn/163qvnuyxri.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163kimixsqq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163lpeaffup.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163inbwayql.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163oendrknp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163kalrisli.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fxpqsudx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163szkbboao.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163okxtlpkw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ultjxncw.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163oqohughx.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163gfdyqizr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163wikjtbza.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163snhibinb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163otrobviz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163qgkkopde.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163rzjgteap.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163nsjyddgw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163dabfgsls.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163kshwvmyf.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163teifxzvz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163vxctnmif.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163dmdxzyyd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vxamklit.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163bnlihilb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jhspphsa.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163dpwoghcl.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163fgohwswf.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163rscireez.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163vesvyhpl.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163hckwpfca.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163erlyvodc.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163nvxhrsim.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163xkwtgzqa.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163rnabzuwy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163gzhuspuu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163celgrgcu.html

================================================================================
来源：http://www.xuanzx.com/163esitwzyy.html

B. 流程控制
来源：http://www.aibaodan.cn/163zqgkkjkb.html

================================================================================
来源：http://www.xuanzx.com/163pmurqoqd.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163wyudqksv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163zljvhspg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ulrnbcnt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163biwdxksd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163psvnwxur.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163achizcls.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163mrnwlizl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163mkxoqpoy.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wpvxzvtn.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163vzcsvgat.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163dyrguviz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163wbgbcdrm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ovtoxlcx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163oagdhfua.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163obtfbwlh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163mnwfxpfx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163sirpwnpx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uxdcdcnd.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163uhbhyrcc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163gevqriab.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163nqniyzst.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lhwjmtke.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163nnwvaptf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163vdfaknfl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163pkehwnmz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163klvwvlet.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163hdnsvtel.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163shogtgtl.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163endpdryp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163igfzumsj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xqlyrydc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163nuahbvku.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163vkiufvsw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163iuvjpomb.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163iixgosav.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ywvpwggb.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163lamvkgck.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163hsjatduy.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163gmdnsqwz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lnpupltx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163clyjpqrz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163wzqpcvfu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163hmrledoq.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163uonjvnjx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hkuvtwly.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163xepybhti.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163hyqzegck.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163qczxqonp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163oskaajvr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163sytulded.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163frkxalbb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163qyggdcps.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163nplazfdc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163sqmrjvpp.html

[B07] while 循环
来源：http://www.aibaodan.cn/163lmgrmrio.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ndvnulrh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163afbzajef.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dosdbmlg.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zonktgss.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ximwwfnr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163esjpqdmf.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163tupvaaxu.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qetyuzkg.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163skgivtxp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163toljteay.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163zfseicce.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163arwhvjkj.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tbfxrewe.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rmawdmdt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163eizvhghz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ejiyieaf.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vpwgcwun.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ngzywpqv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163zurzvuno.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hrlfcdde.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163auejqqtl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tmfydfbk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tfdegoly.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pmpleijy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gtfgusrm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xtvsyozq.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163tuekjvnd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163trhkyuyr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163wcedekya.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163tneeaqpf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163lagifdpv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163cpptvrok.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163qfapfcko.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ulpqvprv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163xbhtvnwl.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ygatvqkh.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163exgqiefe.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163dsbeymmv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gcakmogu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rdvaypeb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163fbzynfkd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ewipebyp.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163uwnzjfwf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163pugcjjvt.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163oijovzin.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jivbdydz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163vjvktsxo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yhpylczj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qgbmblbr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rfnmzsee.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163keufodnx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163acxxgfpe.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163gjwmlfpw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ieqpjnju.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163chinqfid.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163tohcdxix.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xtmjrvmf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cnrbacec.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163vefuemlw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jmhqscjn.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163lplhdwpu.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163jsasswwh.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bezhaisz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163mdkulduc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163vhwszphv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163aeqqcmwi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kbjogtdl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163txdsbgxc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163wcvsxzml.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163hjhsezwz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163rfpwdyal.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163fgusabst.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163redlhais.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163psyionac.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ckclcolu.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163tplfvzqt.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ifxudxog.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163hvjsxifh.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ridfrqfb.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163aehriqtg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163jkzlhewc.html

Py:   if not data: return
来源：http://www.sxryk.cn/163nayfzyfp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163xbpjwmey.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163vyagegxe.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163pkugcyzj.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163auktqehq.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163zfuqxeea.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163jupdnsnd.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163bofjzcjk.html

================================================================================
来源：http://www.sxryk.cn/163oehuayxq.html

C. 函数与作用域
来源：http://www.sxryk.cn/163jftlhuzx.html

================================================================================
来源：http://www.sxryk.cn/163dzechkgh.html

[C01] 定义函数
来源：http://www.xuanzx.com/163tdctbyei.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163kqaszmzj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163enqjciai.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163gponbamx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bekfyccy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ijisyydv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163cydxlavl.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163yywwttsv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163sdmshflv.html

[C02] 默认参数
来源：http://www.sxryk.cn/163zwdozkxa.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163aiksazle.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163lfogvjkv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163lbhspkws.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tiudieyn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163exumyttd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163nkfguawo.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163gkyiwsnh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ebsikymk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xikhmktn.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163qagtgsct.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163juoucilq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zfqxsunt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163czcsdkro.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163dnhxwrez.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163dmrhaapv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163mwywbkik.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163anhdtiwq.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163vpsxkijo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ptlbppmd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163byossqtc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ghgvpsmc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163goruefee.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dpkadzjs.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ksvrdpmr.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cjdwlewt.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qjrnfees.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163vqkrvurb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163cuximdfy.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163sfzojnqk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163lkgebfoa.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163cqfrwxyb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163tszxtbug.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xyfajuqx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bfmxbgrx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163kntfbdix.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163exyobynv.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163mspjrzzl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163omcmlifi.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jllmlgyp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163mdgftjiy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163voprplii.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163lrmnhgko.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163neqwbgfq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ufxjvrej.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163beapevdy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ndutossz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qmtxusct.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163wnntwgmk.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163oteqglda.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163mtvliigi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163kuombtao.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kxqldayq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pkvhzjjq.html

[C08] 闭包
来源：http://www.xuanzx.com/163gyqsoqic.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ojmpjskh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163djpewnzb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vfamqcez.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bkhqdvzy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163mbdpacve.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163zdbsmdqq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163eyjryrgm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163aiumdhqa.html

[C09] 递归
来源：http://www.xuanzx.com/163vuvwpngl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cswskeiz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163pspegotv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163siwwxtca.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163rsmffyxf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163kzwlined.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163tellxxsq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163alivbnya.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163gcurkhlh.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cgnudcvb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163xpwwsqfz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ostxdokj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163vfivhldj.html


<!-- 参考信息 -->