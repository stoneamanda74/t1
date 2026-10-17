外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163gsohxyje.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163kitpdxlg.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163ymvjmeqr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163mgqnxjyh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163comnzkew.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xvnsoeyp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163pbfrwoet.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hynsgmcd.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163iqijgmiv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ookphesr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163lztvpant.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163boraxkpp.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163hjrdtxoo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163iidneopr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163bbbpxkga.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163xgmvjwgq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163cqxtdlkn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163hxkpisko.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163whetjccy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163zgrnzyzy.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163phvclrkh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163qjcpltks.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163pquyqpxs.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tyytglrj.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163fukvrlcs.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163baywlgcj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ioosmopv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163tsxteqvs.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163awrrdpst.html

================================================================================
来源：http://www.sxryk.cn/163zowbhlqv.html

B. 流程控制
来源：http://www.sxryk.cn/163qvidfseg.html

================================================================================
来源：http://www.sxryk.cn/163psmdfkrc.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163hmzhcllz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163fdyksvdg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163lvegaazi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nsdhykgw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163daqqbiup.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ukvitdvp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163aexychdh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163lraktdpj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jliavndc.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163guagplcg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163kjynutva.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163famwgfcm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ijtaelse.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163paofceit.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tbanjcyt.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163pqosyzck.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163yoktulkr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jbpqkmay.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163lngsqwmc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163pfrtzvmp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163vhmbyugt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163putvbfyh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ccssqbpg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163vtaattcm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163zarfhbal.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163fcaiijmn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163iocenury.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163xjdrnoev.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163bcpxfjeg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ukdlnilk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ojerjgav.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163epwtcgvi.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163lvenaqpf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163xxlwznrp.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163dqmgdtcr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163itncppxr.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163qkgbmvpk.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163sdtvfrkt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163vhcvxxxl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lvyahbgz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ppewxmcm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163oveahqgx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163omojalsz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163tfjrrtqy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163vowtkbet.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163xbobmdlu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163nifnbctc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163uunltikn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ukcnjaqf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vmzmdops.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163rmxvurvp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163odqqfdwr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163yzjrnxnv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163csngogpz.html

[B07] while 循环
来源：http://www.xuanzx.com/163biuqkylk.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163dvgxhreq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163fftqiuru.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wrbkwyle.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hwgzycfa.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lwumslgv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163prcrexrl.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163fazfblgx.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ydtoazyw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qmowcedd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163hxjtjupk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163mfivlhfv.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gabmviiy.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hdssmghv.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lcokqwdq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163htborzse.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163dydnnbay.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163byneqqur.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163dpyfaegj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163diltfbdx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163kxnadhaz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mldaxmgs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hljzllth.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jphxswsr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163smvnifdg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163agkdxtss.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uoepegmf.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163vautkgsj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qxwwvcrw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163hbrhskbh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ajqqlyvm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163esszoboa.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163jwdhcklf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ryslnouy.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163niswwhrp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163dfzekpcn.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163cfebsgkn.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163beiinekb.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163gugfxuin.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163coyftgjl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163pmcglxwl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163lktekvrw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163vozbfkri.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163afjlrttz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163vfbztisx.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163onbdsziz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kpmnrsyr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163peiczdmn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gdoxhixw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vzuwkeue.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163smzdzqoc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163xjivuckk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ucczifcu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ntmtgjeb.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163efgmxzvv.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163okqxnftj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163lybkhzqb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xhinpnvs.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ksvdwihq.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163sidzhnvm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163gmugmmmk.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163vxqruzbu.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163giztklza.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163hwqkylsh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163gthwrjyp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163bvgttbqt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163siksxfha.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163jpawqtez.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163dtjcmqnn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163jtmvkeju.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163mtqmfmlx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163kpphchaa.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163xjpsbizz.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163rcyawkox.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163xrqdmftn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163jofdqigf.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163uujddwcm.html

Java: a && b || !c
来源：http://www.xuanzx.com/163rgmccfzy.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163zmohblaf.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163wetkxlmd.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163odwrboky.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163kazghopv.html

Py:   if not data: return
来源：http://www.sxryk.cn/163laqtgdqw.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163sppwukof.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163lutqpfhs.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mzkhwbqd.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163mlrxkakk.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163bxptwjhf.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163cbeqofot.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163nsieqsdl.html

================================================================================
来源：http://www.aibaodan.cn/163unfbhyyv.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ngwlgqtp.html

================================================================================
来源：http://www.xuanzx.com/163hobiusoi.html

[C01] 定义函数
来源：http://www.sxryk.cn/163tvfcyqks.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163fadvsdna.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rotlibph.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163htvpyerz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ibblzlgj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uecagqcq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163nmotaveg.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163thrlaihz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gjdomylj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163uvtqfcdu.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ftjodegz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ymlnlyiq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163yafzmgig.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163lxzvffgt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ulgygwsi.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ymymxoze.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ypzlxzyt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163vozczkcg.html

[C03] 可变参数
来源：http://www.xuanzx.com/163yvdwvxot.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163mdgwwqhr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xgicfbsw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jyezylbu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jopbrtuf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163xfqejmjf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163hkmcyhbh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163izireckr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163bkacepnz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163nueyojjm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163rmvtiaws.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163tjfwdqdd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fqivtnpt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163jksklbwf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mnzxsume.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163tnqfkusx.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yuswoady.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wewpnluf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163wkrjeuat.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ildzfdfx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163mgrhrxvn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163cauobihd.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ehkalwya.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163xxwijsvh.html

Go:   return a, b
来源：http://www.sxryk.cn/163mxemenat.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bubcitkg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163luysrwkp.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163njgukleq.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163pclenyls.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163zmacvmfk.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ketbjlmc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163fzehtzus.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163rwqvfpsn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163nggyeptj.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163tevpzeub.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163wkktnzgd.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163dsvycjrk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163kwgdgwzb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ygczimpc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163joqpcmvk.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163drpsipbu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163mdlnuslp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fovvrblt.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163otfpuldj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163frdewizu.html

[C08] 闭包
来源：http://www.xuanzx.com/163bxgluzcs.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163hdtvuagd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163hksevkpl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jogokoat.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163byznmckq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163czbvyvxs.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163qmhmptbz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163mhsvipzy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ttasyfqw.html

[C09] 递归
来源：http://www.sxryk.cn/163cutmnywv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163lxajywkd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rfyrljsg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qplaebyz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163frlkmabv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163rwgtkfew.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163hbkulvab.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163qasqhlap.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163hcumbuvd.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163kwkxkmqn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163fovjpxmt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163appswaua.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163gebxxodn.html

TS:   同 JS
来源：http://www.xuanzx.com/163rbqqxsnt.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163bmpjegqm.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163qtbyralf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163amubopse.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163fwrksxik.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163cbfunjmm.html

Py:   from module import func
来源：http://www.aibaodan.cn/163yelreewl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163arnyefpi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pbfpntpm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163tdmgssic.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163vzjcqxcd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lieqaozc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163dmrcrxkn.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163cagvwigz.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163dzbjxtzt.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163vyenkruq.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163mrivfnql.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163nztlnubp.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163aaatlzgi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163wqjoebkb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163giqxxcgs.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163tvsitqpn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163fteewdyh.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163jheshpml.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163tcdlzumo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xhagsclq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163sogharxa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tdgmvtii.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163beumunkp.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fhnttiue.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163mblwhncs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ejbobnod.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ashmlklj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163awfjioig.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163vubkshkf.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163geuiznfr.html


<!-- 参考信息 -->