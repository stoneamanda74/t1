外链999!wailian999！

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163slhlmxhn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163tefnjdaw.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163mdysvmmb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ybfjnghn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163gqkpvtvo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163pogbgokm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163mykiwjce.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163xaoiimzv.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163xuewijmu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163fzmdibml.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163cmzwwnps.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163xsdorhvu.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ywiktuaf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163wubugvkm.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ewgfroad.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163feyeamcs.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163uhnwxtsu.html

================================================================================
来源：http://www.sxryk.cn/163lspolvrx.html

B. 流程控制
来源：http://www.aibaodan.cn/163cfgiwclt.html

================================================================================
来源：http://www.xuanzx.com/163jrthykrr.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163nojeafpf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163jjolvrwi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163dyogninl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tsrxnncs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dkgimorv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163okktgrun.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163jhdfxhvo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163gttzzxlq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163honxztej.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163eniraqfo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163tmvuubkj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163bdbzujpp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163quimedsq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gboxwvne.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163oixxziqj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163pktezzic.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ptbkohwr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163oshdlxte.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163uyyrepls.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163lhsyiafo.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163zajszxvx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163rrayqfxs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163sjnrdbyk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163usffjodh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163fihvfykc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163lmnabbns.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163qvewzqqe.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163qruvdlha.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163zaznfzav.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163byarczce.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gvjbhvrb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163cuhjnuru.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ntmpxzne.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163tyalcfpe.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163veyjfhka.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163sxgdhybs.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163qiutwvav.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163trczsvbw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163zehfgcvs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lpzffnpp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163gvyuomie.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163xqzqqbjh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163oltoxkgi.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163sfqrgklr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hdkmkavg.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163opolprvi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163nqifaqpj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ebtgetti.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zlzlaybd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163krpibral.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ggujudga.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163yipthkvt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163bsieacxv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163cclyvsfd.html

[B07] while 循环
来源：http://www.aibaodan.cn/163dfuyenhr.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163aorvnnqw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163xzljpzrj.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163icdycaic.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163midnqmnf.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ekcgaumr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ucsyscob.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163eyvgsvns.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bffcyqpy.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163rhkfeezi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163suwqhyjc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ctxianie.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pwzivcqy.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gokqtkyx.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ssitntlo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163qmnznbbf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163fbrxmxvn.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fyxxmsry.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ujtokghs.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163cevvsjaf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163xfhcezpt.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ytvwabgb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mtgiqnon.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xnfxeiih.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163emnzvgyo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163hyieegmc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163harzbmpa.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163lugxlcng.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163vjhepdcp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163qeongayc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163imaivvrb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163cvghgnbz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163nxbargxz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163mkxslamr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163suiuzkfd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163cziuitxm.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163stkjpzug.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163zxsihzyg.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163owpntonf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lfuybjau.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fnpvqlla.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163depshtfw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163sqlawhow.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163aurbkbph.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163tpgmtvcg.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163luybfdns.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163bnroulem.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163yoxekiwy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163irxwyvvr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zgdllntm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rsnrfscl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163vcmbdvxh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163tmtknmnz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163hjjddvyy.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163lwltugno.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163pykvomxb.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163kttmehua.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gqwbcwpw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163oiuuxkqm.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ybpfzats.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163sklbihre.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163gqkutjtz.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163bhndawoo.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163vwrtxatc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ajaphdzd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163lxftpigh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rkbzbpga.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163sgfuplyy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163mxrbsiqa.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163mfzskkxy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163tlvcqrrk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163didfyzjo.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ivqskvkp.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163mfiulisf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163zntvsval.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163orfaiyzz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163klumhzqd.html

Java: a && b || !c
来源：http://www.sxryk.cn/163bdspppfj.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163lpkppzhe.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163qaygproe.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ebttsydy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163vdquffsn.html

Py:   if not data: return
来源：http://www.xuanzx.com/163dyheezsg.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gneyhlka.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ezwjvsbv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ouwlsuta.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163myvmlpsn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163kfrdofyr.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vstcdzkz.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163fjqtnewf.html

================================================================================
来源：http://www.aibaodan.cn/163qyoxesed.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ucdclmok.html

================================================================================
来源：http://www.aibaodan.cn/163aaaqfbjv.html

[C01] 定义函数
来源：http://www.sxryk.cn/163oowpwmhn.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163riaeecfb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mrxmfael.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163urdqhehb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wvvdbqcv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163aztbovir.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163yqlyvagi.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163rwoyphpc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163svryhcad.html

[C02] 默认参数
来源：http://www.xuanzx.com/163qhshiwms.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163bpioqwvj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ccjsukmx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163oetfcueb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163kbdcdwos.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163lcozxctv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163tzeppnqx.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xhnkbcjk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nzrphfjo.html

[C03] 可变参数
来源：http://www.xuanzx.com/163tldujgzq.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163hgwjkuqt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163iudoforx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163auzlgeeq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hchohlqc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163imndmxjf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163jqchvwiq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163vcdjktvn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163qzufyblf.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163uwjhchzc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163otgsidvd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ohapmlaf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163uujvejsb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163qbppbnss.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vzfxtwwo.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ofsijrxn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163imxavhql.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163oikjyivw.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163fptdudzt.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ljvzoibc.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fmqdrkhi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ehtevwby.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163jkcgejjz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yqqvenfc.html

Go:   return a, b
来源：http://www.sxryk.cn/163uzswpsup.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bfwxnnzj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163saxwtbcq.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163oltmnpwk.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163tcpbogkc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163spplbsff.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163izzbcmiv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163zkfpkcjb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163rnsvtqck.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lqbkpqfm.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163lxcdklrs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163bnjihsps.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163kogrzhnn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163iofaidlg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163emwolije.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163sqhnxcxh.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163gzxaxhuw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ntbydqfm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163dvqbjxkh.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163rwupzncp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163utfhhnwj.html

[C08] 闭包
来源：http://www.sxryk.cn/163zvzznlop.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163pebpnzgp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163apmqrykp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mcgyhldo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ehboffoj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ddvhtjps.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ragfcfzb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163cvqphrox.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lspnpypl.html

[C09] 递归
来源：http://www.sxryk.cn/163srdashfe.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163brimjxyl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163jqpimodm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163frycbvsx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163iglgbnrp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163chaucgtx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163quzsysou.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ouvregdn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wjqncjtt.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163hrcbwyhx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163jrqaerad.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ovlxzfge.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163tvxzpcxs.html

TS:   同 JS
来源：http://www.aibaodan.cn/163dbpwzbas.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zdnuenit.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gdfxwygq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163spdeboob.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ebjmnszm.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hlpeypwe.html

Py:   from module import func
来源：http://www.sxryk.cn/163bpwqopgm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163lyebsipe.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163vslgeaml.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163lwwgpfeh.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ikoeixvm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163awbanfwt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163uasqgrnt.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163arqvjcay.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zuywiknp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163bucizfml.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163nuemnhfi.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ypoikgzk.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163szredojc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163mrzlprje.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163rlzrgauf.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163vxlcefiv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163etbvkqua.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163odjdvlly.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163hucjarwp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qoggjapr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ayogcwom.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nequjlju.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wztzgcqh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xetimckv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163tmnjlmvk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163rinkgbem.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ncxokzem.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163biocbjyg.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163dmubacau.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163czgbwlwy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163rumpvbhw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163huhcrudq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ggswktfj.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163hdyqnxkt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ebsffcpr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163xubvkyxk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163dyuwkqxe.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ykcrwlbi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163tpdcnogr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163pooqhxip.html

Java: // 无解构
来源：http://www.xuanzx.com/163gssjpfyu.html

Go:   // 无解构
来源：http://www.sxryk.cn/163btvxyyhv.html


<!-- 参考信息 -->