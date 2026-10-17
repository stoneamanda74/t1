外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163fsjorfwa.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163vgquzmnj.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163dwypezfl.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163lssvhqkw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163yengkbhz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wvdvhhkc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163lmieqwpp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163kfzxfwhx.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163dzrrrele.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ouvmafud.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163kxxesdfx.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163eqesqohq.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163ngcgtrum.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163emqicvyn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163otnttxxu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ohcvnynr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163mxupcllj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163yksnbdsk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163pzxxewgl.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163bklvjwwt.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163dfmxmgef.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163vpdsludj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163raceuyrx.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163nvmrfujf.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163cfkpatoc.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ihdpvtzp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163mhypxzoj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163slmeeuqk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163gtarlnwy.html

================================================================================
来源：http://www.sxryk.cn/163zbwnqegy.html

B. 流程控制
来源：http://www.aibaodan.cn/163lmmqpuqt.html

================================================================================
来源：http://www.sxryk.cn/163oztuxusp.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163cavrtiwv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163pvrjzpro.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163yvamnygw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163huiiakpk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pjiwhkcc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nehescsb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163yliquqdw.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ilrfjfmu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yxmnqjkg.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163iqvgtrqe.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163grdgugme.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163fbqffavz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ymwkiheu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rcxlhqvi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ncsbhyuy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163dhlgqrhe.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163wdcsjsru.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qnosscea.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163rbnhtwsr.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ohowwior.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163isxigzyo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bzkbfjyw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163towwzhkd.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ajdyhjhu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163otttwovp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163rxlokcrl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163jcqdjeim.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163yarpaudp.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163rpujwfsn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ajnzzjml.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vxaquumo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163pdjsquts.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163clbijcwm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163zpelvwsu.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163lwoaaefr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163wwfzmkih.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163vvywryzv.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163gzsofqad.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163bxcxxled.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hqopqyuy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163knyhnyck.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163fhigantk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163hiojtcyz.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163cutuywbq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ddniadsi.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163nkkllaot.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ichngpdd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163oereejim.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163uphfvtlb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163watikbmr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163nfzjpyqk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ojuvqylg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ygqhavgb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163kvzfdjrx.html

[B07] while 循环
来源：http://www.aibaodan.cn/163gqdsuifv.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163dpasdmte.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163pwbfpvgk.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rrhrmkea.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fmlalgwv.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kjlaybko.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163qecbgygl.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ycgyctwi.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qgzhhrcq.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163wxeboflf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163dcyxtnwd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163rllnsbqd.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dwtwodlp.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aolgnzbq.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pidsasgi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163snymgefd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163qtutcphk.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lpnkskwt.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163pfgneveq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163zbmkuorp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163qkjtymxo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163whyqdvxb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fmffgzuf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bmbbkuti.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163qxrcgefj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163lemytzoi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eevubhwt.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163eenuzazf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163vklfgcrn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rdbpuydg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163coujwfld.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ejzdxkuc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163mhcyybme.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163bxsnnsgb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163iumisnbt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163znrwysox.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163zluytwfy.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163yjfxjcnh.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163aedfidxb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ormknpll.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wtkjhhjx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163mhxgerwo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163cyfvrxyg.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163jmvqyvsl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163kbypwjjq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163lvwoorfw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163oegdtyzb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ldoloyio.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nqooelqt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pauujdoz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rbwmhwul.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163jtxxneqv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163pdvopzgq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163hkqfwnkh.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163caxiwkai.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163crwkqcru.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163iawhbfdm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cdpuykzx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fqzultda.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163phkpggju.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163isjxsomh.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163jvifxvem.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ppusxprj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163owbxygyz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163hgxnugrt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163hbtffxke.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163uaggoyxc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rexydncu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163byngifad.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163uggjzhux.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163edzlkhwr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163clhewnud.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kzbxxbaz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163tqhgaqut.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163sarorwst.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163lwxyhbrx.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163sndhnxrz.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xupcutdl.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qyoyzass.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163chfrxxnw.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fqjuxddg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163qfxfsnne.html

Py:   if not data: return
来源：http://www.sxryk.cn/163dspcogmb.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163nvfqkbwa.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163dsylxpkk.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163pnaukxwo.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163fefzwhke.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163lyivfhfk.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163jnbwxqbk.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163tvrqwcqz.html

================================================================================
来源：http://www.aibaodan.cn/163dbqvpndj.html

C. 函数与作用域
来源：http://www.xuanzx.com/163rpnfgqqg.html

================================================================================
来源：http://www.aibaodan.cn/163qzvittph.html

[C01] 定义函数
来源：http://www.sxryk.cn/163qxxwyloh.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ybnbywvl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nfjmqupr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163yjwktosf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gkthjzra.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lvuydftm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163muyvgutk.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163zfeaijbr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pwbcrzmf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163dhnljrhe.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dyatvbwd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163dggqhmxh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ohxkypve.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jbtyjkni.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163qdnwjone.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163svkaoomr.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163dxvzhlmi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163czkhbppw.html

[C03] 可变参数
来源：http://www.sxryk.cn/163nyusobeg.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163tvkexyjz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163jvxkvvzd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zlihelkt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ccslumod.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163lzafqlrc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163dhrgpoyx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163epffevfs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ozoldxfj.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163aosxobhy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163zcvzuxkn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163sdzkncue.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163gcuxlidf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163huapexwc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163egxhllyl.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163djzxlykp.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163heualhig.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163umjegeur.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163pzzpcedl.html

Py:   return a, b
来源：http://www.sxryk.cn/163ewzgnjtk.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163xnrhzmsi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163pxonsdlj.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163fmwyjtna.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163mzonpayc.html

Go:   return a, b
来源：http://www.sxryk.cn/163srplzbmt.html

Ruby: return a, b
来源：http://www.xuanzx.com/163fhqwenbj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163mmxkgela.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163sgxhqojo.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163danzvstg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163pgodahwp.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163meuihmml.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163hlksqvoo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163veyssrjb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163pdodklde.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bcwhgcfw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163dgjghjah.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163yhteoxvp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ztavebua.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163xdwipsin.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163errxhmmo.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163azehxust.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163erlhevao.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163hjgnanub.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163oakdbjgx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163dzstbrgk.html

[C08] 闭包
来源：http://www.xuanzx.com/163aufbdmcm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qbcerlkz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163dxznbmty.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ukmubhgi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rdjiugfu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163qlohqhvx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163husfhqlb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ncxrmjmn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kxroizsf.html

[C09] 递归
来源：http://www.xuanzx.com/163lidzoays.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ulokuuke.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163uxzznedx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tjojzots.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qcikfjxx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163nthudvul.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163kohizjet.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163kyflsapb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nusbrljc.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163xvcilijo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163zcttddiq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163cvhtblwc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163iexozhzx.html

TS:   同 JS
来源：http://www.sxryk.cn/163ofomfscq.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ktrdpqva.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163yktowiob.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163tzcdmrvf.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ufaaldqg.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163zwvqqfkv.html

Py:   from module import func
来源：http://www.sxryk.cn/163auvgczcp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163hcwqdxdy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163iwibkyqr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163vwvpbayh.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163bvfgtivw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163uuybixad.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163neeofwbn.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163jojtjgkh.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163yhpuvnkt.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163wyziebkn.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163mpgrisjn.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ssapgbro.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pqkblpvv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163wkkghkpr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163doslsqla.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163mnapuuyp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163guncnsyw.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163mqgxeuku.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163gufnqtob.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vctamnpj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163taypmbkt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jlffcwif.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mewwbiwe.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ojouhxjh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163yxqkbgvo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163yoqgbvlg.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163rzvjtdcf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163klygfoeh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163vxgqcvhw.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163atflwplx.html


<!-- 参考信息 -->