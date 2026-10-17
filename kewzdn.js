外链999!wailian999！

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163hvgfreqo.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163cwgjycvk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163audodwqu.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163pxmhzxxm.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163hrrtpkzv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163zbsfnoyd.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163oenhljhh.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163gwkniyve.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ytyvrgsi.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163kqnalawi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hlykzosr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163tmgoyort.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163uenoohvp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163mxidnpzv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163nouppfts.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163bvsbevoh.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ntlcvklt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163mdlvubuc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163dgjbnvyu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163jbnxsips.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ujjhvrsg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163yatdzeby.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163oxpqlafo.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163uqvpmtwq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163jguowraj.html

================================================================================
来源：http://www.aibaodan.cn/163itimhfgn.html

B. 流程控制
来源：http://www.aibaodan.cn/163oclypnbq.html

================================================================================
来源：http://www.xuanzx.com/163hkodsglb.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163jhcshhkh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ssjwcceo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163wgfhlhdb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163obfalowy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xtjrojzv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ocdxounj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163sbvaheok.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163uxaavccs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163resmfwig.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163gytellnt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163sflsvaci.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ogqcqdhv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163aardawkz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hnaexsly.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hduuimzd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163kpyykobt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163judksfto.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ktpyrbsb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163kajomxgy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163tsrhljze.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163dvwfmaxe.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163yoyhzzcy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163qkugibcx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163kdabveme.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163nbdoocbo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163tkxgkiop.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163fzlxiuvx.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163xtkskqpf.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163zsglinfn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ukroqqnj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163agpeywhc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163alabgpve.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163czbhioim.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163gkssdjzn.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163fauwdvek.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163gsobrqbx.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163dpmxybrg.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163aeamapoz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163grwsobtm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hwzgrtlu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163hlkqkaqj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163fkgtecri.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163bwcrdsge.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163bgpfbktu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163lpqztcet.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163eqvmyvna.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163yfnyobej.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163oulrlrbq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jbeubcqy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163kxetpykl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zfffiury.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163fniuqjvf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163talujior.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163xsexjozp.html

[B07] while 循环
来源：http://www.sxryk.cn/163nxesvdwl.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163uhttjchz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163qcbkhwot.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tiqxqvby.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bkzmyudd.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yslayjvu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vubpmbuq.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ymbhhjuf.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tmjqpgka.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163xzxgqyzq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163hjplxvte.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163aosvusud.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163occlfoqn.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hmustubj.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163obhhrjer.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ydjrrobx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163untcbylf.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163oslgzmjd.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163dgoaqnqy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vgbpyohe.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163krtkjjln.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mzoyjpcy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163twdtjxyq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163imujdwps.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163uwokhnvx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163jllnrcuk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fjhmzmdg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ovpepqen.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163qaxzphrn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163drxdcjjo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163bmdruqym.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163rbnxffag.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163rehmkwzy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163xotwecxl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ibevxgce.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163sfmmwdnf.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163xyjkupqr.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ixemlwpq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163nbqgtvqm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kiknjqii.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163eswurlea.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163uutchfrw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163wnrfjrow.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163hcmwmois.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163pzhvbgxv.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163emavkogp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163wjkezhid.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163epobyxsv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zoprnkaj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rwbbbsio.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lodjmvph.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163yikuahji.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163zohrycxk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163jcfihsfq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163zjhtnubd.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163lmdfibtg.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163riikygtq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kkaoddtp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mundvtyh.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ncsemdsq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163wlxeapbf.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163qmyowyqv.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163lhwfsptr.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163fbwomhji.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163lcmrgcrr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163xbyskcyh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hkyepycd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tyxomnua.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163oleojmrh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163tnbiafux.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163wdikrgch.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ngvxingv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163tsjshpwl.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163thpsefni.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163wsxtzehq.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163gvkpgksd.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163jnehntll.html

Java: a && b || !c
来源：http://www.xuanzx.com/163hoteiyjt.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163aoyjbiwx.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163boxdusbt.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163nvvlsmij.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ynjaqutw.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163lvbfbzwy.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163hvncunoi.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163jblbreix.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163syabrlkv.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163szhxfvvw.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hlgnnjty.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163dibwfadu.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163hipkfjic.html

================================================================================
来源：http://www.xuanzx.com/163dzzfuzbr.html

C. 函数与作用域
来源：http://www.sxryk.cn/163giqmpdfq.html

================================================================================
来源：http://www.aibaodan.cn/163evbbyypr.html

[C01] 定义函数
来源：http://www.xuanzx.com/163wpduajjs.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163eztnakjh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tpsuanxi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vhtsbfwu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163pjfvsism.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163htmajidl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163wlveyccs.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xgmakulc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163eyvpsvzs.html

[C02] 默认参数
来源：http://www.xuanzx.com/163qefjrjqz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163mwmzkspo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vrpadrzj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163esohlkrf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163rektbqsk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163klqfjgcp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163xxfzpkpi.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163utxlhvbu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163xtaxymrb.html

[C03] 可变参数
来源：http://www.sxryk.cn/163yxqbkbff.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163aksjrmko.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163asixmgex.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ejcvpiyr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lksutsjv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163oxbpbfqs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163mvycquqx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163lxusfadt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163wucrtotv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163taqndreh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163sbxiexke.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163lnzzvdyh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163mrppvebf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163rftxrmke.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qeoornxd.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163voohmmfx.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fqaluwqp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rcsvhjto.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163gmecxost.html

Py:   return a, b
来源：http://www.xuanzx.com/163grmoeicy.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163xmxjialu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163hpfmnsji.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163cxrixthd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163uocdgunv.html

Go:   return a, b
来源：http://www.xuanzx.com/163nqnifxve.html

Ruby: return a, b
来源：http://www.sxryk.cn/163rudxkpsp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ltdabawu.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163fkvkkjlb.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163axyxhmcg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ngambrgk.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163rrdbiidu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vtmfxzga.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ticnpwyt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163qckkzvpf.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163unnwkylh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163kbrftmvz.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163cyacfisc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163mncxndzc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ikhocayz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163bucbnaww.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wdwvgjhx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163eqxznlrd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163pnakybwx.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163dlyqmisb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163jswoancv.html

[C08] 闭包
来源：http://www.sxryk.cn/163tqyzkgpe.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163jarebvwj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163iqfiuygj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nmqbaqbf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163juivitys.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163bzybtfme.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163nsitkpsq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163nefhfupn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cvwddaqx.html

[C09] 递归
来源：http://www.sxryk.cn/163jveopfdl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163dkfzuokc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163sqbtktaf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163oxatpaqt.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vgumnfaw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jzhrarzl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ktxyukif.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163fcovjcsz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163szkirtmm.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163repzjeqa.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163igrvnirr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hmxxhtyd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163conlqlqx.html

TS:   同 JS
来源：http://www.xuanzx.com/163juzjjkch.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163fybbseyr.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163swfurwrf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ulztrceu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163gzgihoxj.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163tniperom.html

Py:   from module import func
来源：http://www.sxryk.cn/163eclvtmra.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163kzsjscpr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163jjjmrfey.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163gzanwxkf.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163dzkhhinj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163vudldcfh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vglsgjdp.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163vzgyjjnk.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163zdzcgqsk.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163jscffbnn.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163kyqysyio.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xnqmxiow.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163gicmpuca.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163wjbixhjs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ytoduuqs.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ovjqwtlj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163lckncxcq.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163jjlpwmuq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pyukrcrl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wmtkpueo.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163sxesaakm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xjasryou.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eyscpwxj.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163rnqxrege.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163rahtcsxl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kbsvdlls.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wzfjnxwr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163mkeeqfus.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163hadirexf.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163qrimwcmu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163jfduunca.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nvrrmatr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qbxzgffh.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163pohcttcj.html


<!-- 参考信息 -->