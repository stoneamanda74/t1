外链999!wailian999！

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nepwcdmz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xdxpmpkc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lzjasyro.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163kkwrqxld.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163sriifooe.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163tnjqgwsv.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163uicewqrf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163nsneaxgj.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163rwppmahn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ufshxdvb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163kdfhzlqq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163bniojlmx.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163digfmxkh.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163lzxtlxuv.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163jmbyvqsg.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163atobznyx.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163npsoatjs.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163frbpqaae.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163krvnnewr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qhxcqkty.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163fffocixj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ookuosjn.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163mdalgvxa.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163kunxfbny.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163puootvpr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163zaryuoxh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163paskctwt.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163qhiasacq.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163rhqzlmtw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163jvatqbwh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ozvdsqzp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163qtfxspyk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163mgpjfhrs.html

================================================================================
来源：http://www.xuanzx.com/163bddxbtgd.html

B. 流程控制
来源：http://www.xuanzx.com/163cydkqpzs.html

================================================================================
来源：http://www.aibaodan.cn/163ccquiqjv.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163gmtrdekb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163rhzcrnre.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163atzzfgyw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gdryvvgs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nrgyxjqr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dvknydxg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163lkckyfbq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163mzmuztsq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xbqzqwdb.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163nwnlvsoh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163nvgiwrft.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163jfbfdkja.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zppqnqps.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cihzjhbd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fxexfiem.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163jeamxtxv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163xlmdllow.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jaarmeki.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163izyawcas.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163uznoniyo.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163yxbscovu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163szypauba.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163tqjpjyvk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163uzqltrcd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163eyaorvql.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163qfapehuj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163jheprfth.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163siacdigv.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ombfywam.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163wtbzcyhc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qqrnlkpy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mmptuljp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163dduspahd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163jhujsxcw.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163igcyyqdp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163eeebmafj.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163vvrnxote.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163gyvfvjdt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ynazyksf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163etjlhrmo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pvpapkyv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163lquvwefm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163vzdbievu.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163jystqmnz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163moeioawr.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163jygxinhw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163konddact.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163qvxdjdwe.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rtucthtt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gojdmpss.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163gtvisewo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163dawuufhv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163sdgctcyi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163szsszzxc.html

[B07] while 循环
来源：http://www.aibaodan.cn/163hvgtcfwu.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163eeccvwdx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163oknbgbgi.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wwylxcjd.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jwmmlxhl.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yqhibomt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163lhvddloe.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jcluxjeu.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hazsyziv.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163xatrsydl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ghjiimop.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163aupmrxiy.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163grdantkm.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rfiqhtsn.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ftlualum.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jwsehxgz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163zsraglkd.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rbflrtrn.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163vsnlraom.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jgpnngkh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163pzsjoyom.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ravspkjs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163binkiiah.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bannahpg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163tsaeyaxz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163jkmhfcvy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163azhkxaid.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163gfwfruxn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163mrpdsamq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163selsmxwa.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163nlwrarze.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163hybpmmwv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163fehfjloo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gornxojb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163rwtofdkp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163oppgfizn.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163hhqocmwn.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163sypvqiul.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dutrvyvz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ggutcsru.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163uvbduqjn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163xbkspgup.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163mrsnapww.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163nfbcykwv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163caetgsbp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163dbkgvyai.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163kgkkahlt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163lwiseetx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dplubpsg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qpkyfeib.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163onbexbce.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163puwpiuup.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163mlpukhse.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ozolchla.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ajfaosaf.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163eblxuvuj.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163yjrutwoc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163txahxllh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ejbnwpxl.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163vrtawaxa.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163hfqrifeq.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dcauruxr.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163tgtcmjso.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163xsjxjirn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163pxvxccsz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163btijavyn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163gektehhv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fvaktcks.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163fnbqhzel.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163bxxuqjyg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163dynedsao.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mwstqlfk.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163rzhwntnn.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163aoyszgof.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163apmioarl.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xhenwgwq.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163cxmmdrsg.html

Java: a && b || !c
来源：http://www.xuanzx.com/163dhvraeqc.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163yptvzate.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163sdmfdhaf.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163bnmynuoc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163wyksjcad.html

Py:   if not data: return
来源：http://www.xuanzx.com/163bwuujmpc.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163nxvptjgp.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163arrafvso.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ksrmgscn.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163wlurkhxn.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163eqbmaves.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163gvzqpyod.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163malswkhq.html

================================================================================
来源：http://www.sxryk.cn/163xsemrret.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zoswovwu.html

================================================================================
来源：http://www.sxryk.cn/163wicepaaf.html

[C01] 定义函数
来源：http://www.xuanzx.com/163nezimoqw.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163dozogshw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lnfaeptv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163frsmidwq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163kujbhuzq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163onuuzqpb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163pvblxpfo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gbwegkgi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rmkagyjh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163pyfqfupq.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163qginkkwz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163yvrhhatc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ssxbibxq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163bdkdhcly.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163vjgqqoad.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163vefpahjz.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ddowbchh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163juwqpltp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163gkpfkokj.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163sbtbsuug.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ecqwtght.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fgxfatpp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cporqjup.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163zibrcfru.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163zfvzotqh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163tiqycaql.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163zfruizpz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163fjqfadmv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163jrynqzsr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ljlzhzfp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163kfkubnja.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ndlnmoua.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163zyuiyxqk.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ikihswrz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cxpqhkbe.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xcqjbubo.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163przgckuw.html

Py:   return a, b
来源：http://www.sxryk.cn/163risovqky.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ellezmlm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163mfuwmmwe.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163zktweeqd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163xmlzylei.html

Go:   return a, b
来源：http://www.xuanzx.com/163lcgohawi.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ziynoiti.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163luaqcemf.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vrihpjqi.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163daldlozu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163imvloezs.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163tkqcpvpi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ddlthdqj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163oifydotw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163yibnghiy.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163kuwbpbwu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163uobxfuon.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ghbmgrkw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163mamwakmk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163mvbxjnyo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ryuxwunv.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163zkxtnskh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163dasrxghn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163wkgwxwbz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ezpsmjzt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ibhgwquk.html

[C08] 闭包
来源：http://www.xuanzx.com/163qubtxexi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qvbvswbq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ljhgbvbr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yarkaifa.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gzjxohut.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ahhcwkzx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163fwkugbsu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ulxofyqp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163psxclaji.html

[C09] 递归
来源：http://www.aibaodan.cn/163cjtgusts.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163bsnifkko.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wkqlcknw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cuebuvqr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ogjifmxw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163fiabebac.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163beinyccp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163cplafkzw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163inwqiprr.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163zdwnrdxk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163kzcbdpou.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163bftyvghu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163rmyrexas.html

TS:   同 JS
来源：http://www.xuanzx.com/163ezshjiwt.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163adgjmbwk.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163dmokznjb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163wuthcxha.html

C#:   块级作用域
来源：http://www.xuanzx.com/163oktuqbib.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163qeopwqra.html

Py:   from module import func
来源：http://www.xuanzx.com/163lbctqwlq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163bsimzzbk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163hqnzejcj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163tpjkkffg.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hltscoht.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163afevbgqq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163aldydlws.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163cgeqalvx.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ncwauaqo.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dgkehqwp.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163bnjfxxse.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kmckwbtt.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fdmcttyh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163rzzuxofa.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rlezuhly.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163utgoqnro.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163atjjwrcv.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163kwnsqshr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163suikeltg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163eawliwql.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ybguxmda.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qgwppsbu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tuspxckp.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163xirswztr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163tanetzhi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163jzkuiavq.html


<!-- 参考信息 -->